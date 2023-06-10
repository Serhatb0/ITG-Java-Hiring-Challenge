import { useEffect, useState } from "react";
import ProductItem from "../product/ProductItem";

const HomePageProductSection = ({
  bestSellerData,
  newProductData,
  hotSalesProductData,
}) => {
  const [renderedProduct, setRenderedProduct] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("best-seller");
  useEffect(() => {
    if (selectedFilter === "best-seller") {
      setRenderedProduct(
        bestSellerData.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix best-seller"
            />
          );
        })
      );
    } else if (selectedFilter === "new-arrivals") {
      setRenderedProduct(
        newProductData.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
            />
          );
        })
      );
    } else if (selectedFilter === "hot-sales") {
      setRenderedProduct(
        hotSalesProductData.map((product) => {
          return (
            <ProductItem
              product={product}
              key={product.id}
              className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales"
            />
          );
        })
      );
    }
  }, [selectedFilter]);

  const handleClick = (event) => {
    console.log(event.target.className);
    setSelectedFilter(event.target.className);
  };

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul onClick={handleClick} className="filter__controls">
              <li
                className={`${
                  selectedFilter === "best-seller"
                    ? "active best-seller"
                    : "best-seller"
                }`}
              >
                Best Sellers
              </li>
              <li
                className={`${
                  selectedFilter === "new-arrivals"
                    ? "active new-arrivals"
                    : "new-arrivals"
                }`}
              >
                New Arrivals
              </li>
              <li
                className={`${
                  selectedFilter === "hot-sales"
                    ? "active hot-sales"
                    : "hot-sales"
                }`}
              >
                Hot Sales
              </li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">{renderedProduct}</div>
      </div>
    </section>
  );
};

export default HomePageProductSection;
