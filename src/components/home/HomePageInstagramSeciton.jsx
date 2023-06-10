import Image from "next/image";

const HomePageInstagramSeciton = () => {
  return (
    <section className="instagram spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="instagram__pic">
              <Image
                src="/images/banner/banner-3.jpg"
                alt="instagram"
                width={750}
                height={522}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="instagram__text">
              <h2>Instagram</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3>#Biricik_Automotive</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageInstagramSeciton;
