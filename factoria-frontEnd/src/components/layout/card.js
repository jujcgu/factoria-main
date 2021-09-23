import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Paper from './paper'
import Tabla from './../tabla/tabla'
import Acciones from './acciones'

export default function Targeta() {

    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={11}>
                    <Card style={{ width: '100%' }} text={'dark'}>
                        <Card.Body style={{ paddingBottom: "0rem", borderBottom: "1px solid #ababab" }}>
                            <Card.Header style={{ backgroundColor: "rgba(0,0,0,.0)", borderBottom: "1px solid #ababab" }}>
                                <Card.Img className="text-center" style={{ width: '20%' }} variant="top" src="https://www.usco.edu.co/imagen-institucional/logo/universidad-surcolombiana-m.png" />
                                <Card className="paper" >
                                    <Paper />
                                </Card>
                            </Card.Header>
                            <Col md={12}>
                                <Card.Title className="bigTitle">
                                    GESTION DE PAISES
                                </Card.Title>
                            </Col>
                        </Card.Body>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col xs={11} md={11} className="p-0">
                                    <Card className="border-0">
                                        <Container fluid={true} className="p-0 border-0">
                                            <Acciones/>
                                            <br />
                                            <Tabla />
                                        </Container>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}