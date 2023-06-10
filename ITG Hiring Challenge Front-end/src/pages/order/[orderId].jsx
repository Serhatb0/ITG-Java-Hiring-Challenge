const { default: RootLayout } = require("@/components/layout/RootLayout");
import cn from "classnames";
import styles from "./styles.module.css";
import Image from "next/image";
import { getSession } from "next-auth/react";
import Link from "next/link";
import axiosInstance from "@/config/axiosInstance";
const OrderDetails = ({ data }) => {
  console.log(data);
  return (
    <RootLayout>
      <div className={styles.container}>
        <article className={styles.card}>
          <header className={styles["card-header"]}>
            {" "}
            My Orders / Tracking{" "}
          </header>
          <div className={"card-body"}>
            <h6>Order ID: {data.id}</h6>
            <article className={styles.card}>
              <div className="card-body row">
                <div className={"col"}>
                  {" "}
                  <strong>Estimated Delivery time:</strong> <br />
                  29 nov 2019{" "}
                </div>
                <div className={"col"}>
                  {" "}
                  <strong>Shipping BY:</strong> <br /> {data.companyName}, |{" "}
                  <i className="fa fa-phone" /> +1598675986{" "}
                </div>
                <div className={"col"}>
                  {" "}
                  <strong>Status:</strong> <br /> {data.orderStatus}{" "}
                </div>
                <div className={"col"}>
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>
            <div className={styles.track}>
              <div className={cn(styles.step, styles.active)}>
                {" "}
                <span className={styles.icon}>
                  {" "}
                  <i className={"fa-check fa"} />{" "}
                </span>{" "}
                <span className={styles.text}>Order confirmed</span>{" "}
              </div>
              <div className={cn(styles.step, styles.active)}>
                {" "}
                <span className={styles.icon}>
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>{" "}
                <span className={styles.text}> Picked by courier</span>{" "}
              </div>
              <div className={styles.step}>
                {" "}
                <span className={styles.icon}>
                  {" "}
                  <i className="fa fa-truck" />{" "}
                </span>{" "}
                <span className={styles.text}> On the way </span>{" "}
              </div>
              <div className={styles.step}>
                {" "}
                <span className={styles.icon}>
                  {" "}
                  <i class="fa fa-dropbox"></i>
                </span>{" "}
                <span className={styles.text}>Ready for pickup</span>{" "}
              </div>
            </div>
            <hr />
            <ul className={cn("row", styles.row1)}>
              {data.getAllProductResponses.map((product) => (
                <li key={product.id} className={"col-md-4"}>
                  <figure className={cn(styles.itemside, "mb-3")}>
                    <div className={styles.aside}>
                      <Image
                        width={80}
                        alt="order-img"
                        height={80}
                        src={product.url[0]}
                        className={cn(styles["img-md"], "border")}
                      />
                    </div>
                    <figcaption className={cn(styles.info, "lign-self-center")}>
                      <p className={styles.title}>
                        {product.name} <br /> 8GB RAM
                      </p>{" "}
                      <span className={"text-muted"}>${product.price} </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
            <hr />
            <Link href={"/order"} className="btn btn-warning" data-abc="true">
              {" "}
              <i className="fa fa-chevron-left" /> Back to orders
            </Link>
          </div>
        </article>
      </div>

      {/* <div className="container1">
        <article className="card">
          <header className="card-header"> My Orders / Tracking </header>
          <div className="card-body">
            <h6>Order ID: OD45345345435</h6>
            <article className="card">
              <div className="card-body row">
                <div className="col">
                  {" "}
                  <strong>Estimated Delivery time:</strong> <br />
                  29 nov 2019{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Shipping BY:</strong> <br /> BLUEDART, |{" "}
                  <i className="fa fa-phone" /> +1598675986{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Status:</strong> <br /> Picked by the courier{" "}
                </div>
                <div className="col">
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>
            <div className="track">
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-check" />{" "}
                </span>{" "}
                <span className="text">Order confirmed</span>{" "}
              </div>
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>{" "}
                <span className="text"> Picked by courier</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-truck" />{" "}
                </span>{" "}
                <span className="text"> On the way </span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-box" />{" "}
                </span>{" "}
                <span className="text">Ready for pickup</span>{" "}
              </div>
            </div>
            <hr />
            <ul className="row">
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/iDwDQ4o.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      Dell Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$950 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/tVBy5Q0.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      HP Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$850 </span>
                  </figcaption>
                </figure>
              </li>
              <li className="col-md-4">
                <figure className="itemside mb-3">
                  <div className="aside">
                    <img
                      src="https://i.imgur.com/Bd56jKH.png"
                      className="img-sm border"
                    />
                  </div>
                  <figcaption className="info align-self-center">
                    <p className="title">
                      ACER Laptop with 500GB HDD <br /> 8GB RAM
                    </p>{" "}
                    <span className="text-muted">$650 </span>
                  </figcaption>
                </figure>
              </li>
            </ul>
            <hr />
            <a href="#" className="btn btn-warning" data-abc="true">
              {" "}
              <i className="fa fa-chevron-left" /> Back to orders
            </a>
          </div>
        </article>
      </div> */}
    </RootLayout>
  );
};

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${session?.accessToken}`;
  const orderId = query.orderId;

  const response = await axiosInstance.get(`/order?id=${orderId}`);

  const data = await response.data;

  return {
    props: {
      data,
    },
  };
}

export default OrderDetails;
