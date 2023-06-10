import Image from "next/image";
import Link from "next/link";

const HomePageBanner = () => {
  return (
    <div className="banner spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-4">
            <div className="banner__item">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-1.jpg"
                  width={457.5}
                  height={457.5}
                  alt="banner1"
                />
              </div>
              <div className="banner__item__text">
                <Link href="/products">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="banner__item banner__item--middle">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-2.jpg"
                  width={457.5}
                  height={457.5}
                  alt="banner2"
                />
              </div>
              <div className="banner__item__text">
                <Link href="/products">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="banner__item banner__item--last">
              <div className="banner__item__pic">
                <Image
                  src="/images/banner/banner-3.jpg"
                  width={457.5}
                  height={457.5}
                  alt="banner3"
                />
              </div>
              <div className="banner__item__text">
                <Link href="/products">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
