import Image from "next/image";
import Link from "next/link";
import { ColorRing } from "react-loader-spinner";

const ShoppingCartItem = ({
  shoppingCart,
  deleteCartItem,
  isLoadingDeleteCartItem,
  selectedShoppingCart,
  onClick,
}) => {
  return (
    <>
      <tr onClick={onClick}>
        <td className="product__cart__item">
          <div className="product__cart__item__pic">
            <Image
              width={90}
              height={90}
              src={shoppingCart?.urls[0]}
              alt="shoppingcart"
            />
          </div>
          <div className="product__cart__item__text">
            <h6>{shoppingCart.productName}</h6>
            <h5>${shoppingCart.price}</h5>
          </div>
        </td>
        <td className="quantity__item">
          <div className="quantity">
            <div className="pro-qty-2">
              <input type="text" defaultValue={shoppingCart.quantity} />
            </div>
          </div>
        </td>
        <td className="cart__price">$ {shoppingCart.totalPrice}</td>
        <td onClick={deleteCartItem} className="cart__close">
          {selectedShoppingCart !== shoppingCart.id ? (
            <i className="fa fa-close" />
          ) : (
            isLoadingDeleteCartItem || <i className="fa fa-close" />
          )}
          <ColorRing
            visible={
              selectedShoppingCart === shoppingCart.id
                ? isLoadingDeleteCartItem
                : false
            }
            height="60"
            width="60"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </td>
      </tr>
    </>
  );
};

export default ShoppingCartItem;
