import * as Yup from "yup";

export const registerSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(4, "First Name must be least 4 charcters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(4, "Last Name must be least 4 charcters"),
  userName: Yup.string()
    .required("User Name is required")
    .min(4, "User Name must be least 4 charcters"),
  email: Yup.string().required("Email is required").email("Email is invali"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be least 8 charcters"),
});
