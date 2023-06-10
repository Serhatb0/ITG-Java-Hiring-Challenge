import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="#"></a>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <a href="#">
                <Image
                  src="/images/payment.png"
                  width={218}
                  height={23}
                  alt="payment"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li>
                  <a href="#">Clothing Store</a>
                </li>
                <li>
                  <a href="#">Trending Shoes</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Sale</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">Delivary</a>
                </li>
                <li>
                  <a href="#">Return &amp; Exchanges</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>NewLetter</h6>
              <div className="footer__newslatter">
                <p>
                  Be the first to know about new arrivals, look books, sales
                  &amp; promos!
                </p>
                <form action="#">
                  <input type="text" placeholder="Your email" />
                  <button type="submit">
                    <span className="icon_mail_alt" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer__copyright__text">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <p>
                Copyright © 2020 All rights reserved | This template is made
                with <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
