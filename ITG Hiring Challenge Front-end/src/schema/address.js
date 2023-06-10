import * as Yup from "yup";

export const addressSchema = Yup.object({
  addressTitle: Yup.string().required("Address title is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    // .min(11, "Phone number must be at least 11 digits")
    .max(11, "Phone number can be at most 11 digits")
    .required("Phone number is required"),
  fullAddress: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  identityNumber: Yup.string().required("Identity Number is required"),
});
