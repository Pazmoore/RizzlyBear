import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Us = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="state">
              <h1>HOW I WANT OUR LOVE TO BE FOREVER</h1>

              <Carousel responsive={responsive} infinite={true} className="us">
                <div className="red">
                  <img
                    src={"https://c.tenor.com/gor2UjZoXe4AAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/gRnRdgBucm8AAAAC/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/jVkgUJg1PtMAAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/OC-3Ef-3sMsAAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/k4PnuXRh2KwAAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/5J7t72CTt18AAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
                <div className="item">
                  <img
                    src={"https://c.tenor.com/h2hGNnJQgScAAAAd/tenor.gif"}
                    alt="Image"
                  />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Us;
