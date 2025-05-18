import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Spinner,  } from 'reactstrap'
 const About = () => {
  // const dispatch = useDispatch();
  return (
   <Fragment>
     <div>
        <Container>
            <Row>
                <Col xs="12" className='text-center'><h1>About Page</h1></Col>
            </Row>
        </Container>
     </div>
   </Fragment>
  )
}

export default About
