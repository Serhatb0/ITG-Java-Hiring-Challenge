import styles from "./styles.module.css";

import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import Input from "../ui/Input";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/register";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useState } from "react";
import Button from "../ui/Button";
import { useIntl } from "react-intl";
import useAxiosAuth from "@/hooks/useAxiosAuth";
const RegisterPage = () => {
  const intl = useIntl();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const axiosAuth = useAxiosAuth();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    let result;
    try {
      result = await axiosAuth.post("/auth/register", {
        ...values,
      });
      setIsLoading(false);
      router.push("/email");
    } catch (error) {
      const errorMessages = Object.values(error.response.data.validationErrors);
      errorMessages.forEach((error) => {
        toast.error(error);
      });
      setIsLoading(false);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Your First Name ",
      value: values.firstName,
      errorMessage: errors.firstName,
      touched: touched.firstName,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Your lastName ",
      value: values.lastName,
      errorMessage: errors.lastName,
      touched: touched.lastName,
    },
    {
      id: 3,
      name: "userName",
      type: "text",
      placeholder: "Your userName ",
      value: values.userName,
      errorMessage: errors.userName,
      touched: touched.userName,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Your email address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Your Password ",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <>
      <section className={cn(styles.container, styles.forms)}>
        <div className={cn(styles.form, styles.signup)}>
          <div className={cn(styles["form-content"])}>
            <header className={cn(styles.header)}>Signup</header>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  id={input.id}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={input.value}
                  errorMessage={input.errorMessage}
                  touched={input.touched}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                />
              ))}

              {/* <div className={cn(styles["field"], styles["button-field"])}>
                <button type="submit">Signup</button>
              </div> */}

              <Button
                content={intl.formatMessage({ id: "signin" })}
                type={"submit"}
                isLoading={isLoading}
              />
            </form>
            <div className={cn(styles["form-link"])}>
              <span>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className={cn(styles["login-link"], styles.link)}
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
          <div className={cn(styles.line)} />
          <div className={cn(styles["media-options"])}>
            <a href="#" className={cn(styles.field, styles.facebook)}>
              <IoLogoFacebook
                className={cn(
                  styles.bx,
                  styles["bxl-facebook"],
                  styles["facebook-icon"]
                )}
              />
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className={cn(styles["media-options"])}>
            <a href="#" className={cn(styles.field, styles.google)}>
              <Image
                width={20}
                height={20}
                src={"/images/google.png"}
                alt="login"
                className={cn(styles["google-img"])}
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
