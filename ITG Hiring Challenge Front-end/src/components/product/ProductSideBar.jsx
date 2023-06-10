import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductSideBar = ({ categories, brands }) => {
  const [isOpenForCategory, setIsOpenForCategory] = useState(true);
  const [isOpenForBrand, setIsOpenForBrand] = useState(false);
  const [isOpenForFilter, setIsOpenForFilter] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    const { categoryId, brandId, keyword, ...queryParams } = router.query;

    if (searchTerm !== "") {
      if (categoryId !== undefined && brandId === undefined) {
        router.push(
          {
            pathname: "/products",
            query: {
              ...queryParams,

              categoryId,
              keyword: searchTerm,
              size: process.env.PAGE_SİZE,
              page: 0,
            },
          },
          undefined,
          { scroll: false }
        );
      } else if (categoryId !== undefined && brandId !== undefined) {
        router.push(
          {
            pathname: "/products",
            query: {
              ...queryParams,

              brandId,
              keyword: searchTerm,
              categoryId,
              size: process.env.PAGE_SİZE,
              page: 0,
            },
          },
          undefined,
          { scroll: false }
        );
      } else {
        router.push(
          {
            pathname: "/products",
            query: {
              ...queryParams,
              keyword: searchTerm,
            },
          },
          undefined,
          { scroll: false }
        );
      }
    } else {
      router.push(
        {
          pathname: "/products",
          query: {
            ...queryParams,
            size: process.env.PAGE_SİZE,
            page: 0,
          },
        },
        undefined,
        { scroll: false }
      );
    }
  };

  const handleFilterPrice = (minPrice, maxPrice) => {
    const query = { ...router.query };
    if (minPrice) {
      query.minPrice = minPrice;
    }
    if (maxPrice) {
      query.maxPrice = maxPrice;
    }

    const href = {
      pathname: router.pathname,
      query: query,
    };

    return { href };
  };

  return (
    <div className="shop__sidebar">
      <div className="shop__sidebar__search">
        <form>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <button onClick={handleClick} type="submit">
            <span className="icon_search" />
          </button>
        </form>
      </div>
      <div className="shop__sidebar__accordion">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-heading">
              <a
                onClick={() => setIsOpenForCategory(!isOpenForCategory)}
                data-toggle="collapse"
                data-target="#collapseOne"
              >
                Categories
              </a>
            </div>
            <div
              id="collapseOne"
              className={`collapse ${isOpenForCategory && "show"}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__categories">
                  <ul className="nice-scroll">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          scroll={false}
                          className={
                            router.asPath ===
                            `/products?categoryId=${category.id}&size=${process.env.PAGE_SİZE}&page=0`
                              ? "active-category"
                              : ""
                          }
                          href={`/products?categoryId=${category.id}&size=${process.env.PAGE_SİZE}&page=0`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a
                onClick={() => setIsOpenForBrand(!isOpenForBrand)}
                data-toggle="collapse"
                data-target="#collapseTwo"
              >
                Branding
              </a>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${isOpenForBrand && "show"}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__brand">
                  <ul>
                    {brands.map((brand) => (
                      <li key={brand.id}>
                        <Link
                          scroll={false}
                          className={
                            router.asPath ===
                            `/products?brandId=${brand.id}&categoryId=${router.query.categoryId}&size=${process.env.PAGE_SİZE}&page=0`
                              ? "active-category"
                              : ""
                          }
                          href={`/products?brandId=${brand.id}&categoryId=${router.query.categoryId}&size=${process.env.PAGE_SİZE}&page=0`}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <a
                onClick={() => setIsOpenForFilter(!isOpenForFilter)}
                data-toggle="collapse"
                data-target="#collapseThree"
              >
                Filter Price
              </a>
            </div>
            <div
              id="collapseThree"
              className={`collapse  ${isOpenForFilter && "show"}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="shop__sidebar__price">
                  <ul>
                    <li>
                      <Link scroll={false} href={handleFilterPrice(1, 50).href}>
                        $0.00 - $50.00
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(50, 100).href}
                      >
                        $50.00 - $100.00
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(100, 150).href}
                      >
                        $100.00 - $150.00
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(150, 200).href}
                      >
                        $150.00 - $200.00
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(200, 250).href}
                      >
                        $200.00 - $250.00
                      </Link>
                    </li>
                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(250, 300).href}
                      >
                        $250.00 - $300.00
                      </Link>
                    </li>

                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(1000, 2000).href}
                      >
                        $1000 - $2000
                      </Link>
                    </li>

                    <li>
                      <Link
                        scroll={false}
                        href={handleFilterPrice(3000, 3500).href}
                      >
                        $3000 - $3500
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
