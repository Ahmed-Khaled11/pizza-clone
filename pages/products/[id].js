/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect, Fragment} from 'react'
import Image from "next/image";
import Head from "next/head";
import { Button, Nav, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { sendData } from '../../redux/productSlice'
import Link from 'next/link';

export default function ProductDetails(props) {
  const dispatch = useDispatch()
  const handleCart = (product) => {
    dispatch(sendData(product));
  }
  return (
    <div>
      <Head>
        <title>{props.product.title}</title>
        <meta name="description" content="Pizza"/>
        <meta name="keywords" content="pizza store online pizza shop " />
        <meta name="theme-color" content="#d1411e" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Row className="product text-center m-4 text-md-start d-flex flex-column  flex-md-row">
        <div className="col-md-6 m-md-6 d-flex justify-content-center align-items-center">
          <Image src={`${props.product.path}`} width="450px" height="450px" />
        </div>
        <div className="col-md-4 p-2 fs-5 fw-bold m-1 m-md-4 d-flex justify-content-start align-items-start flex-column">
          <h2 className="fs-1 fw-bold text-uppercase">{props.product.title}</h2>
          <span>$ {props.product.price}</span>
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
              <input type="checkbox" id="medium" name="medium" />
              <label className="ms-2" htmlFor="medium">
                Medium
              </label>
            </div>
            <div>
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
          <div className="cart d-flex w-100 ms-2 mt-4">
            <input type="number" defaultValue="1" />
            <Button
              onClick={() => handleCart(props.product)}
              className="btn bg-white ms-2"
              style={{
                color: "#dc3545",
                border: "1px solid #dc3545 !important",
              }}
            >
              Add To Cart
            </Button>
            <Link href="/cart">
              <Nav.Link href="/cart" className="btn btn-danger ms-2">
                <div className="go-cart d-flex justify-content-center">
                  <span className="text-white">Go To Cart</span>
                  <span className="d-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-bag-check-fill  ms-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
                      />
                    </svg>
                  </span>
                </div>
              </Nav.Link>
            </Link>
          </div>
        </div>
      </Row>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://pizza-clone.vercel.app/api/products/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://pizza-clone.vercel.app/api/products`);
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
