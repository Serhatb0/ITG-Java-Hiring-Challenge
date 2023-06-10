import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const HomePageHero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero__slider">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            </ol>

            <div className="carousel-inner">
              {/* <div className="text-carousel">
                <div className="">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2030</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically
                  </p>
                  <a href="#" className="primary-btn">
                    Shop now <span className="arrow_right" />
                  </a>
                  <div className="hero__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div> */}
              <Carousel
                autoPlay={true}
                showThumbs={false}
                showArrows={true}
                interval={5000}
                infiniteLoop={true}
              >
                <div className="carousel-item active">
                  <Image
                    src={"/images/hero/hero-1.jpg"}
                    className="d-block w-100"
                    alt="..."
                    width={1905}
                    height={800}
                  />
                </div>
                <div className="carousel-item active">
                  <Image
                    src={"/images/hero/hero-2.jpg"}
                    className="d-block w-100"
                    alt="..."
                    width={1905}
                    height={800}
                  />
                </div>
              </Carousel>
            </div>
            {/* <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next bg-red"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageHero;
