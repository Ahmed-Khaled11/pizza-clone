/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Head from "next/head";

import { Button, Row } from "react-bootstrap";
export default function ProductDetails(props) {
  return (
    <div>
      <Head>
        <title>{props.product.title}</title>
        <meta name="description" content="Pizza Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Row className="product text-center m-4 text-md-start d-flex flex-column  flex-md-row">
        <div className="col-md-4 m-md-6">
          <Image src={`${props.product.path}`} width="450px" height="450px" />
        </div>
        <div className="col-md-6 p-2 fs-5 fw-bold m-1 m-md-4 d-flex justify-content-start align-items-start flex-column">
          <h2 className="fs-1 fw-bold text-uppercase">{props.product.title}</h2>
          <span>{props.product.price}</span>
          <p className="text-black-50 text-capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantiumsit aliquid.Accusantiumsit aliquid amet Accusantiumsit
            aliquid. consectetur adipisicing elit. Accusantiumsit aliquid.
          </p>
          <span className="d-block ms-3">Choose The Size</span>
          <div className="size mb-5 w-100 d-flex justify-content-start align-items-start flex-column">
            <div>
              <input type="checkbox" id="small" name="small" />
              <label className="ms-2" htmlFor="small">
                ٍSmall
              </label>
            </div>
            <div>
              {" "}
              <input type="checkbox" id="medium" name="medium" />
              <label className="ms-2" htmlFor="medium">
                Medium
              </label>
            </div>
            <div>
              {" "}
              <input type="checkbox" id="large" name="large" />
              <label className="ms-2" htmlFor="large">
                Large
              </label>
            </div>
          </div>
          <span className="ms-3 ">Choose Additional Ingredients</span>
          <div className="Ingredients mb-5 w-100 d-flex justify-content-start align-items-start flex-column">
            <div>
              <input type="checkbox" id="Double" name="Double" />
              <label className="ms-0 ms-md-2" htmlFor="Double">
                Double Ingredients
              </label>
            </div>
            <div>
              <input type="checkbox" id="Extra" name="Extra" />
              <label className="ms-0 ms-md-2" htmlFor="Extra">
                Extra Cheese
              </label>
            </div>
            <div>
              <input type="checkbox" id="spicy" name="spicy" />
              <label className="ms-0 ms-md-2" htmlFor="spicy">
                spicy Sauce
              </label>
            </div>
            <div>
              <input type="checkbox" id="Gaelice" name="Gaelice" />
              <label className="ms-0 ms-md-2" htmlFor="Gaelice">
                Gaelice Sacue
              </label>
            </div>
          </div>
          <div className="cart w-100 ms-2 mt-4">
            <input type="number" defaultValue="1" />
            <Button className="btn btn-danger">Add To Cart</Button>
          </div>
        </div>
      </Row>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: {
        id: `${product.id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
