import React from 'react'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


export default function Paper() {

    return (
        <Container fluid={true}>
            <Row style={{ height: "4vw" }} >
                <Col xs={1} sm={1} md={1} style={{ height: "4vw", paddingRight: "0px", paddingLeft: "0px", display: "flex" }}>
                    <Image style={{ height:"4vw" , paddingLeft: "0px", padding: "5px" }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ribazos.es%2Fwp-content%2Fuploads%2F2018%2F12%2Fcuadro-blanco-sobre-fondo-blanco-1.jpg&f=1&nofb=1" roundedCircle />
                </Col>
                <Col xs={6} sm={6} md={6} className="align-self-center">
                    <Row>
                        <Col xs={9} sm={9} md={9} className="CentroV" >
                            <Card.Text style={{ fontSize: "1.2vw" }}>
                                NOMBRE COMPLETO DEL USUARIO
                            </Card.Text>
                        </Col>
                        <Col xs={3} sm={3} md={3} className="align-self-center">
                            <Card.Text className="textPara">
                                20181167163
                            </Card.Text>
                        </Col>
                    </Row>
                </Col>
                <Col xs={5} sm={5} md={5} className="align-self-center">
                    <Row>
                        <Col className="flex">
                            <Button className="lightBorder CentroV" variant="light">Regresar</Button>
                            <Button className="lightBorder CentroV" variant="light">Cerrar sesión</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}