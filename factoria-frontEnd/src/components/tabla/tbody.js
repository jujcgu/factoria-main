import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export default function Tbody() {

    return (
        <Col>
            <Row className="ContainerTd align-content-center">
                <Col xs={4} md={4}>
                    1
                </Col>
                <Col xs={4} md={4}>
                    COLOMBIA
                </Col>
                <Col xs={4} md={4}>
                    PESO (COP)
                </Col>
            </Row>
            <Row className="ContainerTd align-content-center">
                <Col xs={4} md={4}>
                    2
                </Col>
                <Col xs={4} md={4}>
                    MEXICO
                </Col>
                <Col xs={4} md={4}>
                    PESO (MNX)
                </Col>
            </Row>
            <Row className="ContainerTd align-content-center">
                <Col xs={4} md={4}>
                    3
                </Col>
                <Col xs={4} md={4}>
                    ESPAÑA
                </Col>
                <Col xs={4} md={4}>
                    EURO (EUR)
                </Col>
            </Row>
            <Row className="ContainerTd align-content-center">
                <Col xs={4} md={4}>
                    4
                </Col>
                <Col xs={4} md={4}>
                    CHILE
                </Col>
                <Col xs={4} md={4}>
                    PESO (CLP)
                </Col>
            </Row>
            <Row className="ContainerTd align-content-center">
                <Col xs={4} md={4}>
                    5
                </Col>
                <Col xs={4} md={4}>
                    ARGENTINA
                </Col>
                <Col xs={4} md={4}>
                    PESO (ARS)
                </Col>
            </Row>
        </Col>
    );
}