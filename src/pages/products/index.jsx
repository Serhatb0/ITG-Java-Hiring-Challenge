import ProductPage from "../../components/product/ProductPage";
import RootLayout from "@/components/layout/RootLayout";
import brandService from "@/services/BrandService";
import categoryService from "@/services/CategoryService";
import productService from "@/services/ProductService";
import { useState } from "react";

const Product = ({ products, categories, brands }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <RootLayout>
      <ProductPage
        products={products}
        categories={categories}
        brands={brands}
      />
    </RootLayout>
  );
};

export async function getServerSideProps(context) {
  const {
    keyword = "",
    minPrice = "",
    maxPrice = "",
    sortDirection = "",
    categoryId,
    brandId,
    size = 20,
    page = 0,
  } = context.query;
  let productResponse;
  let brands = [];

  if (categoryId !== undefined && brandId === undefined) {
    productResponse = await productService.getProductsByCategoryId(
      categoryId,
      size,
      page,
      keyword,
      minPrice,
      maxPrice,
      sortDirection
    );

    const brandResponse = await brandService.getByCategoryId(categoryId);
    brands = brandResponse.data;
  } else if (brandId !== undefined && categoryId !== undefined) {
    productResponse = await productService.getProductsByBrandId(
      brandId,
      size,
      page,
      keyword,
      minPrice,
      maxPrice,
      sortDirection
    );
    const brandResponse = await brandService.getByCategoryId(categoryId);
    brands = brandResponse.data;
  } else {
    productResponse = await productService.getProducts(
      size,
      page,
      keyword,
      minPrice,
      maxPrice,
      sortDirection
    );
  }
  const categoriesResponse = await categoryService.getCategories();

  const products = await productResponse.data;
  const categories = await categoriesResponse.data;

  return {
    props: {
      products,
      categories,
      brands,
    },
  };
}

export default Product;
