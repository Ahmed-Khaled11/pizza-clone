/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
const Error = () => {
  return (
    <div>
      <Head>
        <title>404 page not found</title>
        <meta name="description" content="Pizza Products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="error p-5 mt-3 mb-4 d-flex justify-content-center align-items-center flex-column text-capitalize text-danger fs-1 text-center">
        404 page not found !
        <Link href="/">
          <Nav.Link href="/">
            <button className="btn btn-danger rounded">
            Go Back To Home Page{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </button>
          </Nav.Link>
        </Link>
      </div>
      ;
    </div>
  );
}

export default Error;
