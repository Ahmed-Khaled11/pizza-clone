/* eslint-disable @next/next/no-img-element */
import { Carousel, Container, Row } from "react-bootstrap";
import Image from "next/image";
import React from "react";
const Header = () => {



  return (
    <div className="header pt-5 pb-5">
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row className="pt-4 pb-4">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="text d-flex justify-content-center  align-items-center flex-column">
                  <h2 className="fs-2 fw-bold">hot & spicy</h2>
                  <p className="d-block fs-1 fw-bold text-warning">pizza</p>
                  <div className="offer d-flex justify-content-center  align-items-center flex-column">
                    <span className="d-block">50% off</span>
                    <hr />
                    <span className="d-block">order now</span>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="box col-md-6 d-flex justify-content-center align-items-center ">
                <Image
                  className="w-100 h-100"
                  src="/images/gallery2.png"
                  alt=""
                  width="390px"
                  height="390px"
                />
              </div>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="flex-row-reverse pt-4 pb-4">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="text d-flex justify-content-center  align-items-center flex-column">
                  <h2 className="fs-3 fw-bold">best</h2>
                  <p className="d-block fs-3 fw-bold">homemade</p>
                  <div className="offer d-flex justify-content-center align-items-center flex-column">
                    <span className="d-block fs-1 text-warning ">pizza</span>
                    <hr />
                    <span className="">is here</span>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="box col-md-6  d-flex justify-content-center align-items-center">
                <Image
                  className="w-100 h-100"
                  src="/images/gallery3.png"
                  alt=""
                  width="390px"
                  height="390px"
                />
              </div>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="pt-4 pb-4 ">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="text d-flex justify-content-center  align-items-center flex-column">
                  <h2 className="fs-2 fw-bold">hot & spicy</h2>
                  <p className="d-block fs-1 fw-bold text-warning">pizza</p>
                  <div className="offer d-flex justify-content-center  align-items-center flex-column">
                    <span className="d-block">50% off</span>
                    <hr />
                    <span className="d-block">order now</span>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="box col-md-6  d-flex justify-content-center align-items-center">
                <Image
                  className="w-100 h-100"
                  src="/images/gallery2.png"
                  alt=""
                  width="390px"
                  height="390px"
                />
              </div>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Header;
