import React from "react";

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'

export default function EditarPais() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col xs={11} sm={9} md={7}>
                    <Card style={{ width: '100%' }} text={'dark'}>
                        <Card.Body style={{ paddingBottom: "0rem", borderBottom: "1px solid #ababab" }}>
                            <Card.Header style={{ paddingBottom: "3vh", backgroundColor: "rgba(0,0,0,.0)", borderBottom: "1px solid #ababab" }}>
                                <Row className="justify-content-center">
                                    <Col xs={{ span: 10 }} sm={{ span: 10 }} md={{ span: 4, offset: 4 }}>
                                        <Card.Img style={{ width: '13vw' }} variant="top" src="https://www.usco.edu.co/imagen-institucional/logo/universidad-surcolombiana-m.png" />
                                    </Col>
                                    <Col xs={{ span: 10 }} sm={{ span: 10 }} md={{ span: 2, offset: 2 }}>
                                        <Button style={{ width: "auto", whiteSpace: "nowrap" }} type="button" className="red-2 border border-dark" variant="light">Cerrar</Button>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Col md={12}>
                                <Card.Title className="bigTitle">
                                    EDITAR PAIS
                                </Card.Title>
                            </Col>
                        </Card.Body>
                        <Card.Body>
                            <br />
                            <br />
                            <Row className="justify-content-center">
                                <Col xs={9} sm={8} md={7}>
                                    <Row className="justify-content-md-center">
                                        <InputGroup>
                                            <Col xs={6} sm={6} md={6}>
                                                <h5 className="skip">ID:</h5>
                                            </Col>
                                            <Col xs={5} sm={5} md={5}>
                                                <FormControl className="clarito"
                                                    placeholder="1"
                                                    aria-label="EDITAR PAIS"
                                                    aria-describedby="basic-addon2"
                                                />
                                            </Col>
                                        </InputGroup>
                                    </Row>
                                    <br />
                                    <Row className="justify-content-md-center">
                                        <InputGroup>
                                            <Col xs={6} sm={6} md={6}>
                                                <h5 className="skip">NOMBRE DEL PAIS:</h5>
                                            </Col>
                                            <Col xs={5} sm={5} md={5}>
                                                <FormControl className="clarito"
                                                    placeholder="Colombia"
                                                    aria-label="EDITAR PAIS"
                                                    aria-describedby="basic-addon2"
                                                />
                                            </Col>
                                        </InputGroup>
                                    </Row>
                                    <br />
                                    <Row>
                                        <InputGroup>
                                            <Col xs={6} sm={6} md={6}>
                                                <h5 className="skip">MONEDA</h5>
                                            </Col>
                                            <Col xs={5} sm={5} md={5}>
                                                <FormControl className="clarito"
                                                    placeholder="PESO (COP)"
                                                    aria-label="MONEDA"
                                                    aria-describedby="basic-addon2"
                                                />
                                            </Col>
                                        </InputGroup>
                                        <br />
                                        <br />
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row className="justify-content-center">
                                <Button style={{ width: "auto" }} type="button" className="red border border-dark" variant="light">Guardar</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}