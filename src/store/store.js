import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cartReducer } from "./slices/cartSlice";

const persistConfig = {
  key: `root`,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    carts: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);
export { store, persistor };
