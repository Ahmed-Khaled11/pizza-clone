import Head from 'next/head';
import React from 'react'
  import Button from "react-bootstrap/Button";
  import Form from "react-bootstrap/Form";
export default function Contact() {
  return (
    <>
      <Head>
        <title>events</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="contact d-flex justify-content-center align-items-center">
        <Form className="position-absolute bg-white w-80 h-70 p-4">
          <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
            <Form.Label className="fw-bolder fs-1 p-1 p-md-4 mb-4">
              Contact Us
            </Form.Label>
          </Form.Group>
          <div className="theInputs ms-3 text-uppercase">
            <Form.Group className="mt-2 mb-2  text-black-50">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mt-2 mb-2 text-black-50">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-2 mb-2  text-black-50" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control style={{ height: "80px" }} type="text" />
            </Form.Group>
          </div>
          <Button
            variant="primary "
            className="btn btn-danger mt-5 ms-auto me-auto d-flex ps-5 pe-5"
            type="submit"
          >
            Send Your Message
          </Button>
        </Form>
      </div>
    </>
  );
}
