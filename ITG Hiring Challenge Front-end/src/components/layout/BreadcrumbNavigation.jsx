import Link from "next/link";
import { useRouter } from "next/router";

const BreadcrumbNavigation = ({ navigation }) => {
  const { pathname } = useRouter();

  const renderedNavigation = navigation.map((item, index) => (
    <Link key={index} href={`/${item}`}>
      {item}
    </Link>
  ));
  return (
    <section className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__text">
              <h4>{pathname.slice(1)}</h4>
              <div className="breadcrumb__links">
                <Link href="/">Home</Link>
                {renderedNavigation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbNavigation;
