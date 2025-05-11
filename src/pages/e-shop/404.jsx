import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

// import Layout from "../components/Layout/StudentLayout";

// Images
import { notFoundWeb, notFoundMobile } from "../assets/images/index";
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate()

    const back = ()=> {
        navigate("/");
    }

    return <HelmetProvider>
        <Helmet>
            <title> 404 </title>
        </Helmet>
        {/* <Layout> */}
            <>
                <div className="not-found p-2">
                    <Container>
                        <Row className='mb-4'>
                            <Col xl={6} md={12} sm={12} className='order-last'>
                                <div className='parent'>
                                    <div className=''>
                                        <p className='text-primary mb-0'>404 Error</p>
                                        <h4>Sorry not found page</h4>
                                        <p className='description'>Sorry, the page you are looking for doesn't exist or has been moved. Try searching our site:</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} md={12} sm={12} className='order-md-last order-first'>
                                <div className='parent text-center web-not-fount'>
                                    <div className=''>
                                        <img src={notFoundWeb} alt='404' />
                                    </div>
                                </div>
                                <div className='parent text-center mobile-not-fount mb-4'>
                                    <div className=''>
                                        <img src={notFoundMobile} alt='404' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{ span: 6, offset: 3 }} className='pt-2'>
                                <div className="go-to-home text-center">
                                    <Button className='text-light w-50' size='lg' variant='primary' onClick={back()}>Home</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </>

        {/* </Layout> */}
    </HelmetProvider>

};

export default NotFoundPage;