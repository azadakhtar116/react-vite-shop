import React from 'react'
import {Container, Col, Row} from 'reactstrap'

 const dashboard = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg='12'>
                <h1 className='text-center'>Welcome to Dashboard</h1></Col>
            </Row>
        </Container>
    </div>
  )
}

export default dashboard
