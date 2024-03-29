/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-key */
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";
import "../styles/gallery.module.css";
import Head from "next/head";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch(
        "https://pizza-twon.vercel.app/api/products"
      );
      if (componentMounted) {
        setProducts(await response.clone().json());
        setloading(false);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <Fragment>
        <div className="col-md-3">
          <Skeleton count={2} height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton count={2} height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton count={2} height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton count={2} height={250} />
        </div>
      </Fragment>
    );
  };
  const ShowProducts = () => {
    return (
      <Fragment>
        {products.map(({ id, path, title, price, info }) => (
          <div className="col-md-3" key={id}>
            <Image src={path} alt={`${title}`} width="200px" height="200px" />
            <div className="info">
              <h2 className=" fs-4 fw-bold">{title}</h2>
              <div className="price d-flex justify-content-center align-items-center">
                <p className="m-0 fw-semibold">$ {price}</p>
              </div>
              <span className="text-black-50">{info}</span>
            </div>
            <Link href={`/products/${id}`}>
              <button
                type="button"
                className="btn btn-danger order-now mt-3 mb-3"
              >
                Order Now
              </button>
            </Link>
          </div>
        ))}
      </Fragment>
    );
  };
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Pizza Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="gallery d-flex justify-content-center align-products-center text-center pt-5 pb-5">
        <Container>
          <div className="text">
            <h2 className="fw-bold text-uppercase">
              the best <span className="pizza">pizza</span> in twon
            </h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium sit aliquid, suscipit velit quia, pariatur repellat
              ducimus voluptates ex eaque numquam quaerat blanditiis quibusdam
              labore
            </p>
          </div>
          <Row>{loading ? <Loading /> : <ShowProducts />}</Row>
        </Container>
      </section>
    </>
  );
}
