import axiosInstance from "@/config/axiosInstance";

class BrandService {
  getByCategoryId(categoryId) {
    return axiosInstance.get(
      `/brands/findByCategoryId?categoryId=${categoryId}`
    );
  }
}

const brandService = new BrandService();

export default brandService;
