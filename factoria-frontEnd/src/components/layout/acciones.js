import React from "react";

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import CustomModal from "./../modal/customModal";
import { useModal } from './../modal/useModal';

export default function Acciones() {
    const [isModalOpened, setIsModalOpened, toggleModal] = useModal();
    return (
        <Row>
            <Col xs={3} sm={3} md={3}>
                <InputGroup>
                    <FormControl className="inputs"
                        placeholder="BUSCAR PAÍS..."
                        aria-label="BUSCAR PAÍS"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
            </Col>
            <Col xs={9} sm={9} md={9} style={{ textAlign: "end", alignSelf: "center" }}>
                <Button className="lightBorder border border-dark" variant="light">Gestionar</Button>
                <Button className="lightBorder border border-dark" variant="light">Editar</Button>
                <Button className="lightBorder border border-dark" variant="light">Eliminar</Button>
                <Button type="button" onClick={toggleModal} className="red border border-dark" variant="light">Agregar País</Button>
                <CustomModal isActive={isModalOpened} title="Helou" handleClose={() => setIsModalOpened(false)}>
                    <h5>Vamos a ver</h5>
                </CustomModal>
            </Col>
        </Row>
    );
}