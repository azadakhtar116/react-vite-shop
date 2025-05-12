import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Spinner } from "reactstrap";
import Slider from "./slider";
const Home = () => {
  return (
    <Fragment>
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <Slider />
              </div>
            </Col>
          </Row>
          <Row className="bg-yellow-100">
            <Col xs="12">
              <h1>Home Page</h1>
            </Col>
            <Col xs="12" className=""></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;
