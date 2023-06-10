import styles from "./styles.module.css";
import cn from "classnames";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import Input from "../ui/Input";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import { useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { getCart } from "@/store/slices/cartSlice";
const LoginPage = ({ provider }) => {
  const intl = useIntl();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    if (provider === "ADMIN") {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
        provider: provider,
      });
      if (result?.error) {
        toast.error("Parola Yada Email Yanlış");
        setIsLoading(false);
      } else {
        router.push("/admin");
      }
    } else {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      setIsLoading(false);
      if (result?.error) {
        console.log(result);
        toast.error(result?.error);
      } else {
        router.push("/");
      }
      dispatch(getCart());
      actions.resetForm();
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your email address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
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
        <div className={cn(styles.form, styles.login)}>
          <div className={cn(styles["form-content"])}>
            <header className={cn(styles.header)}>
              {provider === "ADMIN"
                ? intl.formatMessage({ id: "login-admin" })
                : intl.formatMessage({ id: "login" })}
            </header>
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

              <div className={cn(styles["form-link"])}>
                <a href="#" className={cn(styles["forgot-pass"])}>
                  Forgot password?
                </a>
              </div>
              <Button
                content={intl.formatMessage({ id: "login" })}
                type={"submit"}
                isLoading={isLoading}
              />
            </form>
            <div className={cn(styles["form-link"])}>
              <span>
                Don-t have an account?{" "}
                <Link
                  href="/auth/register"
                  className={cn(styles["signup-link"], styles.link)}
                >
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
