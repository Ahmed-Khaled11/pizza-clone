import React from 'react'
import Head from 'next/head'
export default function Events() {
  return (
    <div>
      <Head>
        <title>events</title>
        <meta name="description" content="Pizza Events" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="events text-light d-flex justify-content-start align-items-center">
        <div className="text d-flex justify-content-start align-items-center">
          <div className="date d-flex justify-content-center align-items-center flex-column ps-4 pe-4">
            <span className="d-block">05</span>
            <span>06</span>
            <p>Oct</p>
            <p>2022</p>
          </div>
          <p className="w-50 ms-3">
            new <span className="text-warning ">Pizza</span> menu will be avilable
            soon..
          </p>
        </div>
      </div>
    </div>
  );
}
