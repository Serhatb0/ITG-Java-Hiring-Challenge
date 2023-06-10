import { getCart, increaseQuantity, reset } from "@/store/slices/cartSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import { useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";

const ProductItem = ({ product, className }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoadingAddCart, setIsLoadingAddCart] = useState(false);

  const axiosAuth = useAxiosAuth();

  const addToCart = async () => {
    if (session) {
      setIsLoadingAddCart(true);

      try {
        const result = await axiosAuth.post("/shopping-carts", {
          customerId: session.userId,
          productId: product.id,
          quantity: 1,
        });
        dispatch(
          increaseQuantity({
            userId: session.userId,
            quantity: 1,
            price: result.data.totalAmount,
          })
        );
        setIsLoadingAddCart(false);

        toast.success(`${product.name} added to cart`);
      } catch (error) {
        toast.error(intl.formatMessage({ id: "error" }));
        setIsLoadingAddCart(false);
      }
    } else {
      router.replace("/auth/login");
    }
  };

  return (
    <div className={className}>
      <div className="product__item">
        <div className="product__item__pic set-bg">
          <Image
            width={262.5}
            height={260}
            src={product.url && product.url[0]}
            alt="product-img"
          />
          <ul className="product__hover">
            <li>
              <Link href={"/de"}>
                <Image
                  width={38}
                  height={36}
                  src="/images/icon/heart.png"
                  alt="compate"
                />
              </Link>
            </li>
            <li>
              <Link href={`/products/${product.id}`}>
                <Image
                  width={38}
                  height={36}
                  src="/images/icon/compare.png"
                  alt="compare"
                />{" "}
                <span>Compare</span>
              </Link>
            </li>
            <li>
              <Link href={`/products/${product.id}`}>
                <Image
                  width={38}
                  height={36}
                  src="/images/icon/search.png"
                  alt="search"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>{product.name}</h6>
          <a className="add-cart">+ Add To Cart</a>
          <div className="rating">quantity: {product.quantity}</div>
          <h5>${product.price}</h5>
          <div className="product__color__select">
            <label htmlFor="pc-40">
              <input type="radio" id="pc-40" />
            </label>
            <label className="active black" htmlFor="pc-41">
              <input type="radio" id="pc-41" />
            </label>
            <label className="grey" htmlFor="pc-42">
              <input type="radio" id="pc-42" />
            </label>
          </div>
        </div>
        <Button
          onClick={addToCart}
          isLoading={isLoadingAddCart}
          content={"+ Add To Cart"}
          style={{ cursor: "pointer", margin: "0px" }}
        />
      </div>
    </div>
  );
};

export default ProductItem;
