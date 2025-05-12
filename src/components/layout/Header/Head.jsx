import React, { Fragment } from "react";
import { Container, Row, Col, InputGroup, Input, InputGroupText, Spinner } from "reactstrap";
import { Logo } from '../../../assets/images/index'

// third party icon library
import { Heart, Search, ShoppingBag, User } from 'react-feather';
import Register from '../../common/Modals/signup-modal'
const Head = () => {
    return (
        <Fragment>
            <div>
                <div className="head">
                    <Container>
                        <Row>
                            <Col xl="6">
                                <span className="">Super Value Deals - Save more with coupons</span>
                            </Col>
                            <Col xl="6">
                                <div className="d-flex justify-content-end">
                                <span>Super Value Deals - Save more with coupons</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="search">
                    <Container>
                        <Row>
                            <Col lg='2' md='12'>
                                <div className="logo"> <img src={Logo} alt='logo' width={160} /></div>
                            </Col>
                            <Col lg='7' md='12'>
                                <div className="search-input">
                                    <InputGroup>
                                        <Input />
                                        <InputGroupText>
                                            <Search size={20} />
                                        </InputGroupText>
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col lg='3' md='12'>
                                <div className="d-flex justify-content-end gap-3">
                                    <div ><Heart size={25} className="cursor-pointer"/></div>
                                    <div><Register /></div>
                                    <div><ShoppingBag size={25} className="cursor-pointer" /></div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default Head;
