import RootLayout from "@/components/layout/RootLayout";
import productService from "@/services/ProductService";
import { increaseQuantity } from "@/store/slices/cartSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.url[0]);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const intl = useIntl();
  const addToCart = async () => {
    if (session) {
      try {
        const result = await cartService.addToCart(
          session.userId,
          product.id,
          1
        );
        console.log(result);
        dispatch(
          increaseQuantity({
            userId: session.userId,
            quantity: 1,
            price: result.data.totalAmount,
          })
        );
        toast.success(`${product.name} added to cart`);
      } catch (error) {
        toast.error(intl.formatMessage({ id: "error" }));
      }
    } else {
      router.replace("/auth/login");
    }
  };

  return (
    <RootLayout>
      {" "}
      <div>
        <section className="shop-details">
          <div className="product__details__pic">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__breadcrumb">
                    <Link href="/">Home</Link>
                    <Link href="/products">Shop</Link>
                    <span>Product Details</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <ul className="nav nav-tabs" role="tablist">
                    {product.url.map((url, index) => (
                      <li
                        style={{ cursor: "pointer" }}
                        onClick={() => setMainImage(url)}
                        key={index}
                        className="nav-item"
                      >
                        <a className="nav-link" data-toggle="tab" role="tab">
                          <div className="product__thumb__pic set-bg">
                            <Image
                              width={95}
                              height={120}
                              src={url}
                              alt="product"
                            ></Image>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="tabs-1"
                      role="tabpanel"
                    >
                      <div className="product__details__pic__item">
                        <Image
                          src={mainImage}
                          alt="pro"
                          width={346}
                          height={519}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__details__content">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="product__details__text">
                    <h4>{product.name}</h4>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                      <span> - 5 Reviews</span>
                    </div>
                    <h3>
                      ${product.price} <span>70.00</span>
                    </h3>
                    <p>{product.description}</p>
                    {product.categoryName === "Footwear" ? (
                      <div className="product__details__option">
                        <div className="product__details__option__size">
                          <span>Size:</span>
                          <label htmlFor="xxl">
                            xxl
                            <input type="radio" id="xxl" />
                          </label>
                          <label className="active" htmlFor="xl">
                            xl
                            <input type="radio" id="xl" />
                          </label>
                          <label htmlFor="l">
                            l
                            <input type="radio" id="l" />
                          </label>
                          <label htmlFor="sm">
                            s
                            <input type="radio" id="sm" />
                          </label>
                        </div>
                        <div className="product__details__option__color">
                          <span>Color:</span>
                          <label className="c-1" htmlFor="sp-1">
                            <input type="radio" id="sp-1" />
                          </label>
                          <label className="c-2" htmlFor="sp-2">
                            <input type="radio" id="sp-2" />
                          </label>
                          <label className="c-3" htmlFor="sp-3">
                            <input type="radio" id="sp-3" />
                          </label>
                          <label className="c-4" htmlFor="sp-4">
                            <input type="radio" id="sp-4" />
                          </label>
                          <label className="c-9" htmlFor="sp-9">
                            <input type="radio" id="sp-9" />
                          </label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="product__details__cart__option">
                      <a
                        onClick={addToCart}
                        style={{ cursor: "pointer" }}
                        className="primary-btn add-cart-1"
                      >
                        add to cart
                      </a>
                    </div>

                    <div className="product__details__last__option">
                      <h5>
                        <span>Guaranteed Safe Checkout</span>
                      </h5>
                      <Image
                        src="/images/shop-details/details-payment.png"
                        alt="pro"
                        width={476}
                        height={26}
                      />
                      <ul>
                        <li>
                          <span>SKU:</span> 3812912
                        </li>
                        <li>
                          <span>Categories:</span> {product.categoryName}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-5"
                          role="tab"
                        >
                          Description
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-7"
                          role="tab"
                        >
                          Additional information
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="tabs-5"
                        role="tabpanel"
                      >
                        <div className="product__details__tab__content">
                          <p className="note">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="related-title">Related Product</h3>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                    <Image
                      src={"/images/product/product-1.jpg"}
                      alt="relatedProduct"
                      width={262}
                      height={260}
                    ></Image>
                    <span className="label">New</span>
                    <ul className="product__hover">
                      <li>
                        <a href="#">
                          <Image
                            width={38}
                            height={36}
                            src="/images/icon/heart.png"
                            alt="compate"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            width={38}
                            height={36}
                            src="/images/icon/compare.png"
                            alt="compare"
                          />{" "}
                          <span>Compare</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            width={38}
                            height={36}
                            src="/images/icon/search.png"
                            alt="search"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>Piqué Biker Jacket</h6>
                    <a href="#" className="add-cart">
                      + Add To Cart
                    </a>
                    <div className="rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    <h5>$67.24</h5>
                    <div className="product__color__select">
                      <label htmlFor="pc-1">
                        <input type="radio" id="pc-1" />
                      </label>
                      <label className="active black" htmlFor="pc-2">
                        <input type="radio" id="pc-2" />
                      </label>
                      <label className="grey" htmlFor="pc-3">
                        <input type="radio" id="pc-3" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </RootLayout>
  );
};

export async function getServerSideProps(context) {
  const { productId } = context.query;

  const result = await productService.getProductById(productId);

  const product = await result.data;

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
