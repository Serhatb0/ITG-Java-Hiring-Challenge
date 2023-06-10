import AdminRootLayout from "@/components/admin/adminLayout/AdminRootLayout";
import axiosInstance from "@/config/axiosInstance";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useIntl } from "react-intl";
import { toast } from "react-toastify";

const User = ({ usersData }) => {
  const [users, setUser] = useState(usersData);
  const axiosAuth = useAxiosAuth();
  const intl = useIntl();
  const unlockAccount = (userId) => {
    confirmAlert({
      title: "Are you sure?",
      message: "Do you want to unlock Account?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axiosAuth.post(`/auth/accountLockedOpen?userId=${userId}`);

            setUser(users.filter((user) => user.id !== userId));
            toast.success(intl.formatMessage({ id: "account-open" }));
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <AdminRootLayout />

      <div className="admin-content">
        <div>
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>
                        Manage <b>Users</b>
                      </h2>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Failed Login Attempts</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.failedLoginAttempts}</td>
                        <td
                          onClick={() => unlockAccount(user.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <a className="delete" data-toggle="modal">
                            <i className="fa fa-eraser"></i>
                          </a>
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
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/admin/adminLogin",
        permanent: false,
      },
    };
  }
  axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${session?.accessToken}`;

  const response = await axiosInstance.get("/auth/getAllLockedAccounts");

  const usersData = await response.data;
  return {
    props: {
      usersData,
    },
  };
}

export default User;
