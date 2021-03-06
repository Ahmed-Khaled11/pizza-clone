import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";
const TheNavbar = () => {
  const { product } = useSelector((state) => state.product);
   const removeClassShow = () => {
      const disableNav = document.querySelector(".navbar-collapse");
    disableNav.classList.remove("show");
  } 
  return (
    <Navbar className="nav position-sticky top-0" expand="lg">
      <Container>
        <Link href="/cart">
          <Nav.Link href="/cart">
            <span className="cart ms-0 ms-md-4 me-0 me-md-5">
              <p className="num">{product.length}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </span>
          </Nav.Link>
        </Link>
        <Link href="/">
          <Nav.Link href="/">
            <div>
              <div className="logo ms-1 ms-md-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  fill="currentColor"
                  className="bi bi-shop"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                </svg>{" "}
              </div>
            </div>
          </Nav.Link>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          className="text-center text-md-start"
          id="navbarScroll"
        >
          <div className="d-flex flex-column ms-1 ms-md-4">
            {" "}
            <div className="fs-4 text-light fw-bold">PIZZA TWON</div>
            <p className="fs-5 m-0 text-light">123-456-789</p>
          </div>
          <Nav
            className="ms-auto me-md-auto my-2 my-lg-0 text-black fw-bold"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/">
              <Nav.Link
                className="ms-0 ms-md-4 p-0 p-md-1"
                onClick={removeClassShow}
                href="/"
              >
                Home
              </Nav.Link>
            </Link>
            <Link href="/products">
              <Nav.Link
                className="ms-0 ms-md-4 p-0 p-md-1"
                onClick={removeClassShow}
                href="/products"
              >
                Products
              </Nav.Link>
            </Link>
            <Link href="/events">
              <Nav.Link
                className="ms-0 ms-md-4 p-0 p-md-1"
                onClick={removeClassShow}
                href="/events"
              >
                Events
              </Nav.Link>
            </Link>
            <Link href="/contact">
              <Nav.Link
                className="ms-0 ms-md-4 p-0 p-md-1"
                onClick={removeClassShow}
                href="/contact"
              >
                Contact
              </Nav.Link>
            </Link>
            <Link href="/blog">
              <Nav.Link
                className="ms-0 ms-md-4 p-0 p-md-1"
                onClick={removeClassShow}
                href="/blog"
              >
                Blog
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TheNavbar;
