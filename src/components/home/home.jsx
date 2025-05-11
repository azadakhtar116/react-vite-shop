import React, { Fragment } from 'react'
import { Container, Row, Col, Spinner,  } from 'reactstrap'
const Home = () => {
  return (
   <Fragment>
     <div>
        <Container>
            <Row className='bg-yellow-100'>
                <Col xs="12"><h1>Home Page</h1></Col>
                <Col xs="12" className=''>
                <code> in this setup project all initial tasks has been completed</code> <br />
                <code>layout / route/ private and public / login redirection</code> <br />
                <code>redux and login user and save token in cookies and gloabl state</code> <br />
                <code>Axios setup and call api by env files</code> <br />
                </Col>
            </Row>
        </Container>
     </div>
   </Fragment>
  )
}

export default Home
