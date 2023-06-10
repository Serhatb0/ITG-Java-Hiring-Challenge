import LoginPage from "@/components/auth/LoginPage";
import RootLayout from "@/components/layout/RootLayout";
const AdminLogin = () => {
  return (
    <div>
      <RootLayout>
        <LoginPage provider={"ADMIN"} />
      </RootLayout>
    </div>
  );
};

export default AdminLogin;
