import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  content: Yup.string().required("content is required"),
});
