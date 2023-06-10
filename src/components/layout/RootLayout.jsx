import Footer from "./Footer";
import TopBar from "./TopBar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
