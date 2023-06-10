import axiosInstance from "@/config/axiosInstance";

class ProductService {
  getProducts(size, page, keyword, minPrice, maxPrice, sortDirection) {
    const params = {
      keyword,
      size,
      page,
      minPrice,
      maxPrice,
      sortDirection,
    };
    const query = Object.entries(params)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/products?${query}`;
    return axiosInstance.get(url);
  }

  getProductsByCategoryId(
    categoryId,
    size,
    page,
    keyword,
    minPrice,
    maxPrice,
    sortDirection
  ) {
    const params = {
      categoryId,
      size,
      page,
      keyword,
      minPrice,
      maxPrice,
      sortDirection,
    };

    const query = Object.entries(params)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/products/findByCategoryId?${query}`;
    return axiosInstance.get(url);
  }

  getProductsByBrandId(
    brandId,
    size,
    page,
    keyword,
    minPrice,
    maxPrice,
    sortDirection
  ) {
    const params = {
      brandId,
      size,
      page,
      keyword,
      minPrice,
      maxPrice,
      sortDirection,
    };

    const query = Object.entries(params)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/products/findByBrandId?${query}`;
    return axiosInstance.get(url);
  }

  getProductById(productId) {
    return axiosInstance.get(`/products/findById?id=${productId}`);
  }

  getTopFiveProduct() {
    return axiosInstance.get("/products/findTopFiveProduct");
  }

  getNewProduct() {
    return axiosInstance.get("/products/findNewProduct");
  }

  getNewOrderProduct() {
    return axiosInstance.get("/products/findNewOrderFiveProduct");
  }
}

const productService = new ProductService();
export default productService;
