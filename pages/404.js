/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Head from 'next/head'
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
      <div className="error p-5 text-capitalize text-danger fs-1 text-center">
        404 page not found !
      </div>
      ;
    </div>
  );
}

export default Error;
