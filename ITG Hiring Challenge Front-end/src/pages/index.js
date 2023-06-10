import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/components/home/HomePage";
import productService from "@/services/ProductService";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ bestSellerData, newProductData, hotSalesProductData }) => {
  return (
    <>
      <Head>
        <title>Biricik Otomotiv</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage
        bestSellerData={bestSellerData}
        newProductData={newProductData}
        hotSalesProductData={hotSalesProductData}
      />
    </>
  );
};

export async function getServerSideProps() {
  const bestSellerProductResponse = await productService.getTopFiveProduct();
  const newProductProductResponse = await productService.getNewProduct();
  const hotSalesProductResponse = await productService.getNewOrderProduct();

  const bestSellerData = bestSellerProductResponse.data;
  const newProductData = newProductProductResponse.data;
  const hotSalesProductData = hotSalesProductResponse.data;

  return {
    props: {
      bestSellerData,
      newProductData,
      hotSalesProductData,
    },
  };
}

export default Home;
