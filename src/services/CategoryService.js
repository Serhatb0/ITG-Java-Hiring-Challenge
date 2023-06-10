import axiosInstance from "@/config/axiosInstance";

class CategoryService {
  getCategories() {
    return axiosInstance.get(`/categories`);
  }
}

const categoryService = new CategoryService();
export default categoryService;
