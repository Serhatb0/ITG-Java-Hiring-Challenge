import shoppingCartPng1 from "/public/images/shopping-cart/cart-1.jpg";
import shoppingCartPng2 from "/public/images/shopping-cart/cart-2.jpg";
import shoppingCartPng3 from "/public/images/shopping-cart/cart-3.jpg";
import shoppingCartPng4 from "/public/images/shopping-cart/cart-4.jpg";

const shoppingCartList = [
  {
    id: 1,
    img: shoppingCartPng1,
    title: "T-shirt Contrast Pocket",
    quantity: 2,
    price: 55,
    total: function () {
      return this.quantity * this.price;
    },
  },
  {
    id: 2,
    img: shoppingCartPng2,
    title: "T-shirt Contrast ",
    quantity: 3,
    price: 75,
    total: function () {
      return this.quantity * this.price;
    },
  },
  {
    id: 3,
    img: shoppingCartPng3,
    title: "T-shirt  Pocket",
    quantity: 1,
    price: 23,
    total: function () {
      return this.quantity * this.price;
    },
  },
  {
    id: 4,
    img: shoppingCartPng4,
    title: "T- Contrast Pocket",
    quantity: 5,
    price: 15,
    total: function () {
      return this.quantity * this.price;
    },
  },
];

let totalCart = 0;

for (let i = 0; i < shoppingCartList.length; i++) {
  totalCart += shoppingCartList[i].total();
}

export { shoppingCartList, totalCart };
