import * as Yup from "yup";

export const couponSchema = Yup.object({
  discountCode: Yup.string().required("Discount code is required"),
});
