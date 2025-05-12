import React, { Fragment } from 'react'
import { Container, Row, Col, Spinner,  } from 'reactstrap'
const Footer = () => {
  return (
   <Fragment>
     <div>
        <Container>
            <Row>
                <Col xs="12">
                <h1>Footer Page</h1>
                {/* <div id="preloader"></div> */}
                </Col>
            </Row>
        </Container>
     </div>
   </Fragment>
  )
}
export default Footer;