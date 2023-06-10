import AdminRootLayout from "@/components/admin/adminLayout/AdminRootLayout";
import { getSession } from "next-auth/react";
const Admin = () => {
  return <AdminRootLayout></AdminRootLayout>;
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

  return {
    props: {},
  };
}

export default Admin;
