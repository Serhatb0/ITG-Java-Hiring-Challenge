import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
const TopBar = () => {
  const { data: session } = useSession();
  const isAuthenticated = useAuth(false);
  const [isSession, setIsSession] = useState(false);

  useEffect(() => {
    if (session) {
      setIsSession(true);
      return;
    }

    setIsSession(false);
  }, [session, isSession]);

  const router = useRouter();
  const intl = useIntl();
  const { locales } = useRouter();
  const cart = useSelector((state) => state.carts);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  {!session ? (
                    <Link href={"/auth/register"}>
                      {" "}
                      {intl.formatMessage({ id: "signin" })}
                    </Link>
                  ) : null}

                  {isSession === false ? (
                    <Link href={"/auth/login"}>
                      {" "}
                      {intl.formatMessage({ id: "login" })}
                    </Link>
                  ) : (
                    <Link
                      href={""}
                      onClick={() => {
                        signOut({
                          redirect: false,
                        });
                        setIsSession(false);
                      }}
                    >
                      Logout
                    </Link>
                  )}
                  {isSession || (
                    <Link href={"/auth/admin/adminLogin"}>
                      {intl.formatMessage({ id: "login-admin" })}
                    </Link>
                  )}
                </div>
                <div className="header__top__hover">
                  <span>
                    Usd <i className="arrow_carrot-down" />
                  </span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                  </ul>
                </div>
                <div
                  className="header__top__links"
                  style={{ marginLeft: "20px" }}
                >
                  {[...locales].sort().map((locale) => (
                    <Link
                      key={locale}
                      href="/"
                      locale={locale}
                      style={{ marginRight: "16px" }}
                    >
                      {locale}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo"></div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={router.asPath === "/" ? "active" : ""}>
                  <Link href={"/"}>{intl.formatMessage({ id: "home" })}</Link>
                </li>
                <li className={router.asPath === "/products" ? "active" : ""}>
                  <Link href={"/products"}>
                    {intl.formatMessage({ id: "shop" })}
                  </Link>
                </li>
                <li className={router.asPath === "/order" ? "active" : ""}>
                  <Link href={"/order"}>
                    {" "}
                    {intl.formatMessage({ id: "order" })}
                  </Link>
                </li>
                <li className={router.asPath === "/blogs" ? "active" : ""}>
                  <Link href={"/blogs"}>Blog</Link>
                </li>

                <li className={router.asPath === "/contact" ? "active" : ""}>
                  <Link href={"/contact"}>
                    {intl.formatMessage({ id: "contacts" })}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <Link href={""} className="search-switch">
                <Image
                  src="/images/icon/search.png"
                  alt="sarchPng"
                  width={16}
                  height={17}
                />
              </Link>
              <Link href={""}>
                <Image
                  src="/images/icon/heart.png"
                  alt="hearPng"
                  width={18}
                  height={16}
                />
              </Link>
              <Link href={`/shoppingcart?customerId=${session?.userId}`}>
                <Image
                  src="/images/icon/cart.png"
                  alt="cartPng"
                  width={16}
                  height={18}
                />{" "}
                <span>{isAuthenticated ? cart.quantity : 0}</span>
              </Link>
              <div className="price">${isAuthenticated ? cart.price : 0.0}</div>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
