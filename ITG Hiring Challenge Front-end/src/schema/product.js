import * as Yup from "yup";

export const productSchema = Yup.object({
  name: Yup.string().required("Product Name  is required"),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Price number must be numeric")
    .required("Phone number is required"),
  description: Yup.string().required("description is required"),
  quantity: Yup.string()
    .matches(/^[0-9]+$/, "Quantity number must be numeric")
    .required("Phone number is required"),
  categoryId: Yup.string().required("Category is required"),
  brandId: Yup.string().required("Brand is required"),
});
