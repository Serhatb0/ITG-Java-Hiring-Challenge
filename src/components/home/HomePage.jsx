import { useDispatch } from "react-redux";
import RootLayout from "../layout/RootLayout";
import HomePageBanner from "./HomePageBanner";
import HomePageBlogSection from "./HomePageBlogSection";
import HomePageCategorySection from "./HomePageCategorySection";
import HomePageHero from "./HomePageHero";
import HomePageInstagramSeciton from "./HomePageInstagramSeciton";
import HomePageProductSection from "./HomePageProductSection";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { getCart } from "@/store/slices/cartSlice";
const HomePage = ({ bestSellerData, newProductData, hotSalesProductData }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  useEffect(() => {
    dispatch(getCart(session?.userId));
  }, [dispatch, session]);

  return (
    <div>
      <RootLayout>
        <HomePageHero />
        <HomePageBanner />
        <HomePageProductSection
          bestSellerData={bestSellerData}
          newProductData={newProductData}
          hotSalesProductData={hotSalesProductData}
        />
        <HomePageCategorySection />
        <HomePageInstagramSeciton />
        <HomePageBlogSection />
      </RootLayout>
    </div>
  );
};

export default HomePage;
