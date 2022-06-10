/* eslint-disable @next/next/no-page-custom-font */
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "../components/Header";
import Products from "../components/Products";
export default function Home() {


  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza Restaurant" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Products />
    </div>
  );
}
