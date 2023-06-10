const { default: Link } = require("next/link");

import RootLayout from "@/components/layout/RootLayout";
import styles from "./styles.module.css";
import Button from "@/components/ui/Button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart, reset } from "@/store/slices/cartSlice";
import { useRouter } from "next/router";

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(reset());
    dispatch(getCart());
    setTimeout(() => {
      router.push(`${process.env.NEXTAUTH_URL}/tr/products`);
    }, 3000);
  }, [dispatch]);

  return (
    <RootLayout>
      <div className={styles.container}>
        <h1 className={styles.h1}>Payment Successful!</h1>
        <p className={styles.p}>
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link href="/products" className={styles.button}>
          {/* <Button content={"Return to Shop"} type={"submit"} /> */}
          Ödeme işlemi başarılı. Yönlendiriliyorsunuz...
        </Link>
      </div>
    </RootLayout>
  );
};

export default PaymentSuccessPage;
