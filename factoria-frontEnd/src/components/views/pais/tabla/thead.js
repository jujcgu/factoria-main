import React from 'react'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


export default function Thead() {

    return (
        <Container fluid className="ContainerTr">
            <Row className="align-content-center" style={{ height: "5vh", backgroundColor: "#50646f", marginTop: "auto", marginBottom: "auto", margin: "auto 0px"}}>
                <Col xs={4} md={4}>
                    ID
                </Col>
                <Col xs={4} md={4}>
                    NOMBRE
                </Col>
                <Col xs={4} md={4}>
                    MONEDA
                </Col>
            </Row>
        </Container>        
    );
}