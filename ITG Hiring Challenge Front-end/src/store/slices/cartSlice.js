const { createSlice } = require("@reduxjs/toolkit");
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const cookies = parseCookies();

const persistConfig = {
  key: "root",
  storage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    price: 0,
    userId: 0,
  },
  reducers: {
    increaseQuantity: (state, action) => {
      state.quantity += action.payload.quantity;
      state.price = action.payload.price;
      state.userId = action.payload.userId;
      setCookie(
        null,
        `user-${action.payload.userId}`,
        JSON.stringify({
          userId: action.payload.userId,
          price: action.payload.price.toFixed(2),
          quantity: state.quantity,
        }),
        {
          maxAge: 3600,
          path: "/",
        }
      );
    },

    updatedCart: (state, action) => {
      (state.quantity = state.quantity - action.payload.itemAmount),
        (state.price =
          state.price.toFixed(2) - action.payload.price.toFixed(2));
      state.userId = action.payload.userId;

      if (state.quantity < 0 || state.price < 0) {
        state.quantity = 0;
        state.price = 0;
      }

      updatedCookie(state);
    },

    getCart: (state, action) => {
      const cookieName = `user-${action.payload}`;
      const user =
        cookies[cookieName] !== undefined
          ? JSON.parse(cookies[cookieName])
          : null;

      if (user !== null) {
        state.quantity = user.quantity < 0 ? 0 : user.quantity;
        state.price = user.price < 0 ? user.price : user.price;
        state.userId = user.customerId;
      } else {
        state.quantity = 0;
        state.price = 0;
      }
    },

    reset: (state, action) => {
      state.price = 0;
      state.quantity = 0;

      resetCookie(state);
    },
  },
});

const updatedCookie = (state) => {
  setCookie(
    null,
    `user-${state.userId}`,
    JSON.stringify({
      userId: state.userId,
      price: state.price,
      quantity: state.quantity,
    }),
    {
      maxAge: 3600,
      path: "/",
    }
  );
};

const resetCookie = (state) => {
  setCookie(
    null,
    `user-${state.userId}`,
    JSON.stringify({
      userId: state.userId,
      price: 0,
      quantity: 0,
    }),
    {
      maxAge: 3600,
      path: "/",
    }
  );
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export const { increaseQuantity, reset, getCart, updatedCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
