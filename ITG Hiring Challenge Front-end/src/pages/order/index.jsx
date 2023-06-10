import RootLayout from "@/components/layout/RootLayout";
import styles from "./styles.module.css";
import { getSession } from "next-auth/react";

import Link from "next/link";
import axiosInstance from "@/config/axiosInstance";

const Order = ({ data }) => {
  return (
    <RootLayout>
      <div className="container mt-5" style={{ marginBottom: "150px" }}>
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            <div className="rounded">
              <div className="table-responsive table-borderless">
                <table className="table">
                  <thead className={styles.thead}>
                    <tr>
                      <th>Order #</th>
                      <th>Company name</th>
                      <th>status</th>
                      <th>Total</th>
                      <th>Discount Total</th>

                      <th>Created</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {data.map((order) => (
                      <tr key={order.id} className={styles["cell-1"]}>
                        <td>#SO-{order.id}</td>
                        <td>{order.companyName}</td>
                        <td>
                          <span className="badge badge-success">
                            {order.orderStatus}
                          </span>
                        </td>
                        <td>${order.totalAmount}</td>
                        <td>${order.discountTotalAmount}</td>

                        <td>
                          {new Date(order.orderDate).toLocaleDateString()}
                        </td>
                        <td>
                          <Link href={`/order/${order.id}`}>
                            <i className="fa fa-ellipsis-h text-black-50" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export async function getServerSideProps({ req }) {
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

  const { userId } = session;

  const response = await axiosInstance.get(
    `/orders/findByCustomerId?customerId=${userId}`
  );

  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

export default Order;
