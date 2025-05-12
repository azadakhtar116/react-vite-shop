import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Button,
  Alert,
  Spinner,
} from "reactstrap";
import Head from "./Head";
import Navbar from "./Navbar";
import { Camera, Grid } from "react-feather";

const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  return (
    <Fragment>
      <div className="">
        <div className="">
          <Head />
        </div>
        <Container className="">
          <Row>
            <Col lg={2} className="">
              <div>
                <div>
                  <Button
                    style={{
                      padding: "10px 20px",
                      background: "#0aad0a",
                      border: "1px solid #0aad0a",
                      color: "white",
                      cursor: "pointer",
                      width: "auto",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "600",
                      textAlign: "center",
                      width: "100%",
                    }}
                    onClick={toggle}
                  >
                    <Grid size={18} />
                    <span className="ms-2">
                      <>All Departments</>
                    </span>
                  </Button>
                </div>
                <Collapse isOpen={collapse} style={{ zIndex: '9999'}}>
                  <div
                   className="filter-div"
                  >
                   <ul>
                    <li>Dairy, Bread & Eggs</li>
                    <li>Snacks & Munchies</li>
                    <li>Fruits & Vegetables</li>
                    <li>Cold Drinks & Juices</li>
                    <li>Breakfast & Instant Food</li>
                    <li>Bakery & Biscuits</li>
                    <li>Chicken, Meat & Fish</li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </Col>
            <Col xl={9} className="">
              <div className="menu-header">
                <Navbar />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Header;
