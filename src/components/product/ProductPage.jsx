import Link from "next/link";
import BreadcrumbNavigation from "../layout/BreadcrumbNavigation";
import ProductItem from "./ProductItem";
import ProductSideBar from "./ProductSideBar";
import { useRouter } from "next/router";

const ProductPage = ({ products, categories, brands }) => {
  const router = useRouter();
  const { categoryId } = router.query;
  const { brandId } = router.query;
  const { content, pageNumber, pageSize, totalElemnts, totalPages } = products;
  const { page: currentPage } = router.query;

  const renderedProductItem = content.map((product) => {
    return (
      <ProductItem
        className="col-lg-4 col-md-6 col-sm-6"
        key={product.id}
        product={product}
      />
    );
  });

  const PAGE_PADDING = 2;

  const paginationLinks = [];

  if (totalPages > 1) {
    if (currentPage > 0) {
      paginationLinks.push(
        <Link
          scroll={false}
          key={-1}
          href={
            categoryId !== undefined && brandId === undefined
              ? `/products?categoryId=${categoryId}&size=${
                  process.env.PAGE_SİZE
                }&page=${currentPage - 1}`
              : categoryId !== undefined && brandId !== undefined
              ? `/products?brandId=${brandId}&categoryId=${categoryId}&size=${
                  process.env.PAGE_SİZE
                }&page=${currentPage - 1}`
              : `/products?size=${process.env.PAGE_SİZE}&page=${
                  currentPage - 1
                }`
          }
        >
          {"<"}
        </Link>
      );
    }

    const startPage = Math.max(0, currentPage - PAGE_PADDING);
    const endPage = Math.min(totalPages - 1, startPage + 2 * PAGE_PADDING);

    if (startPage > 0) {
      paginationLinks.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationLinks.push(
        <Link
          scroll={false}
          key={i}
          href={
            categoryId !== undefined && brandId === undefined
              ? `/products?categoryId=${categoryId}&size=${process.env.PAGE_SİZE}&page=${i}`
              : categoryId !== undefined && brandId !== undefined
              ? `/products?brandId=${brandId}&categoryId=${categoryId}&size=${process.env.PAGE_SİZE}&page=${i}`
              : `/products?size=${process.env.PAGE_SİZE}&page=${i}`
          }
          className={
            router.asPath ===
            `/products?size=${process.env.PAGE_SİZE}&page=${i}`
              ? "active"
              : ""
          }
        >
          {i + 1}
        </Link>
      );
    }

    if (endPage < totalPages - 1) {
      paginationLinks.push(<span key="end-ellipsis">...</span>);
    }

    if (currentPage < totalPages - 1) {
      paginationLinks.push(
        <Link
          scroll={false}
          key={totalPages}
          href={
            categoryId !== undefined && brandId === undefined
              ? `/products?categoryId=${categoryId}&size=${
                  process.env.PAGE_SİZE
                }&page=${parseInt(currentPage) + 1}`
              : categoryId !== undefined && brandId !== undefined
              ? `/products?brandId=${brandId}&categoryId=${categoryId}&size=${
                  process.env.PAGE_SİZE
                }&page=${parseInt(currentPage) + 1}`
              : `/products?size=${process.env.PAGE_SİZE}&page=${
                  parseInt(currentPage) + 1
                }`
          }
        >
          {">"}
        </Link>
      );
    }
  }
  const handleSort = (e) => {
    const { minPrice, maxPrice, sortDirection, ...queryParams } = router.query;

    const selectedOption = e.target.value;

    if (selectedOption === "low-to-high") {
      router.push(
        {
          pathname: "/products",
          query: {
            ...queryParams,
            sortDirection: "ASC",
          },
        },
        undefined,
        { scroll: false }
      );
    } else if (selectedOption === "all") {
      router.push(
        {
          pathname: "/products",
        },
        undefined,
        { scroll: false }
      );
    } else if (selectedOption === "high-to-low") {
      router.push(
        {
          pathname: "/products",
          query: {
            ...queryParams,
            sortDirection: "DESC",
          },
        },
        undefined,
        { scroll: false }
      );
    } else if (selectedOption === "1000-1500") {
      router.push(
        {
          pathname: "/products",
          query: {
            ...queryParams,
            minPrice: 1000,
            maxPrice: 1500,
          },
        },
        undefined,
        { scroll: false }
      );
    } else if (selectedOption === "1500-10000") {
      router.push(
        {
          pathname: "/products",
          query: {
            ...queryParams,
            minPrice: 1500,
            maxPrice: 10000,
          },
        },
        undefined,
        { scroll: false }
      );
    }
  };

  return (
    <div>
      <BreadcrumbNavigation navigation={["products"]} />
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProductSideBar categories={categories} brands={brands} />
            </div>
            <div className="col-lg-9">
              <div className="shop__product__option">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                      <p>
                        Showing {content.length} of {totalElemnts} results
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                      <p>Sort by Price:</p>
                      <select onChange={handleSort}>
                        <option value="all">All</option>

                        <option value={"high-to-low"}>High To Low</option>
                        <option value={"low-to-high"}>Low To High</option>
                        <option value="1000-1500">$1000 - $1500</option>
                        <option value="1500-10000">$1500 - $10000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">{renderedProductItem}</div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">{paginationLinks}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
