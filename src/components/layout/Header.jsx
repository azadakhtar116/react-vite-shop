import React, { Fragment } from 'react'
import { Container, Row, Col, Spinner,  } from 'reactstrap'
const Header = () => {
  return (
   <Fragment>
     <div>
        <Container>
            <Row>
                <Col xs="12"><h1>Header Page</h1></Col>
            </Row>
        </Container>
     </div>
   </Fragment>
  )
}

export default Header