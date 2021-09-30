import React from "react";

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Modal } from 'reactstrap'
import AñadirPais from "../views/pais/añadirPais";
import EditarPais from "../views/pais/editarPais";



class Acciones extends React.Component {

    state = {
        abierto: false,
        paso:0,
    }

    abrirModal = (value) => {
        this.setState({ abierto: !this.state.abierto });
        if(value === 1){
            this.setState({ paso: 1 });
        }
        else{
            this.setState({ paso:2 });
        }
    }
    render() {
        const modalStyles={
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 'none',
            width: '50vw',
            borderRadius: "25%"
        }
        return (

            <>
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
                        <Button type="button" onClick={() => this.abrirModal(1)} className="lightBorder border border-dark" variant="light">Editar</Button>
                        <Button className="lightBorder border border-dark" variant="light">Eliminar</Button>
                        <Button type="button" onClick={() => this.abrirModal(2)} className="red border border-dark" variant="light">Agregar País</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.abierto} style={modalStyles}>
                    {/* */}
                    <Button style={{ width: "auto", zIndex: 100, position: "absolute",whiteSpace: "nowrap", marginTop: "1vh", right:"1vw"}} type="button" onClick={this.abrirModal} className="red-2 border border-dark" variant="light">Cerrar</Button>
                    {
                        this.state.paso === 1 ? <EditarPais /> : <AñadirPais />
                    }
                </Modal>
            </>
        );
    }
}
export default Acciones;
