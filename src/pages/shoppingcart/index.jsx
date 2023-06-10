import BreadcrumbNavigation from "@/components/layout/BreadcrumbNavigation";
import RootLayout from "@/components/layout/RootLayout";
import ShoppingCartItem from "@/components/shoppingCart/ShoppingCartItem";
import Button from "@/components/ui/Button";
import axiosInstance from "@/config/axiosInstance";
import useAuth from "@/hooks/useAuth";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { updatedCart } from "@/store/slices/cartSlice";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ShoppingCart = ({ data }) => {
  const isAuthenticated = useAuth(true);
  const { data: session } = useSession();
  const intl = useIntl();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts);

  const [subTotal, setSubTotal] = useState(cart.price);
  const [couponCode, setCouponCode] = useState("");
  const [total, setTotal] = useState(cart.price);
  const [shoppingCart, setShoppingCart] = useState(data.shoppingCartItemDtos);
  const [isLoadingCopunCode, setIsLoadingCopunCode] = useState(false);
  const [isLoadingDeleteCartItem, setIsLoadingDeleteCartItem] = useState(false);
  const [selectedShoppingCart, setSelectedShoppingCart] = useState(0);

  const axiosAuth = useAxiosAuth();

  const deleteCartItem = async (cart) => {
    try {
      setIsLoadingDeleteCartItem(true);
      await axiosAuth.delete(
        `/shopping-cart-items?shoppingCartItemId=${cart.id}`
      );

      toast.success(intl.formatMessage({ id: "delete-cart-item" }));

      dispatch(
        updatedCart({
          userId: session.userId,
          price: cart.totalPrice,
          itemAmount: cart.quantity,
        })
      );
      setIsLoadingDeleteCartItem(false);

      setShoppingCart(shoppingCart.filter((item) => item.id !== cart.id));
    } catch (error) {
      toast.error(intl.formatMessage({ id: "error" }));
      setIsLoadingDeleteCartItem(false);
    }
  };

  useEffect(() => {
    setSubTotal(cart.price);
    setTotal(cart.price);
  }, [cart]);
  const renderedShoppingCart = shoppingCart?.map((cart) => {
    return (
      <ShoppingCartItem
        onClick={() => {
          setSelectedShoppingCart(cart.id);
        }}
        selectedShoppingCart={selectedShoppingCart}
        isLoadingDeleteCartItem={isLoadingDeleteCartItem}
        shoppingCart={cart}
        key={cart.id}
        totalAmount={data.totalAmount}
        deleteCartItem={() => deleteCartItem(cart)}
      />
    );
  });

  const config = {
    headers: {
      "Accept-Language": "en",
    },
  };

  const handleCouponCode = async (event) => {
    event.preventDefault();
    setIsLoadingCopunCode(true);
    try {
      const result = await axiosAuth.post("/apply-shopping-carts", {
        customerId: session.userId,
        discountCode: couponCode,
      });
      const data = await result.data;
      setTotal(data.discountedTotalAmount);
      setSubTotal(data.totalAmount);
      toast.success(intl.formatMessage({ id: "coupon-success" }));
      setIsLoadingCopunCode(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setCouponCode("");
      setIsLoadingCopunCode(false);
    }
  };

  const handleChangeCouponCode = (event) => {
    setCouponCode(event.target.value);
  };

  return (
    <RootLayout>
      {isAuthenticated ? (
        <div>
          <BreadcrumbNavigation navigation={["products", "shopping"]} />
          <section className="shopping-cart spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="shopping__cart__table">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>{renderedShoppingCart}</tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="continue__btn">
                        <Link href="/products">Continue Shopping</Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="continue__btn update__btn">
                        <a href="#">
                          <i className="fa fa-spinner" /> Update cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cart__discount">
                    <h6>Discount codes</h6>
                    <form onSubmit={handleCouponCode}>
                      <input
                        onChange={handleChangeCouponCode}
                        type="text"
                        placeholder="Coupon code"
                        value={couponCode}
                      />

                      <Button
                        style={{ marginTop: "60px " }}
                        isLoading={isLoadingCopunCode}
                        // className="btn-apply"
                        type="submit"
                        content={"Apply"}
                      />
                    </form>
                  </div>
                  <div style={{ height: "20px" }}></div>
                  <div className="cart__total">
                    <h6>Cart total</h6>
                    <ul>
                      <li>
                        Subtotal <span>${subTotal}</span>
                      </li>
                      <li>
                        Total <span>${total}</span>
                      </li>
                    </ul>
                    {cart.quantity !== 0 ? (
                      <Link
                        href={
                          couponCode === ""
                            ? "/checkout"
                            : `/checkout?couponCode=${couponCode}`
                        }
                        className="primary-btn"
                      >
                        Proceed to checkout
                      </Link>
                    ) : (
                      <Link
                        href=""
                        scroll={false}
                        onClick={() =>
                          toast.warning(
                            intl.formatMessage({ id: "cart-empty" })
                          )
                        }
                        className="primary-btn"
                      >
                        Proceed to checkout
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </RootLayout>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${session?.accessToken}`;
  const { userId } = session;

  const response = await axiosInstance.get(
    `/shopping-carts?customerId=${userId}`
  );
  console.log(response);
  const data = await response.data;

  return {
    props: {
      data,
    },
  };
}

export default ShoppingCart;
