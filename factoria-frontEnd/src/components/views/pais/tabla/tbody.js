import React, { Component, useState } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { getPaises, updatePais } from '../../../../services/apiPais';



const List = (props) => (
    <>
        {props.items.map((item, i) => {
        
            return (<>
                <Row className="ContainerTd align-content-center" key={i}>
                    <Col xs={4} md={4}>
                        {item.id}
                    </Col>
                    <Col xs={4} md={4} >
                        {item.nombre}
                    </Col>
                    <Col xs={4} md={4}>
                        {item.moneda}
                    </Col>
                </Row>
            </>);
        })}
    </>
)
class Tbody extends Component {
    constructor() {
        super();
        this.state = {
            done: false,
            items: []
        };
        this.getPais = this.getPais.bind(this);
    }
    componentDidMount() {
        this.getPais();
    }
    getPais() {
        getPaises()
            .then(result => result.data)
            .then((items) => this.setState({
                done: true,
                items
            }))
    }
    render() {
        return (
            <Col>
                {this.state.done ? (
                    <List items={this.state.items} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            </Col>
        );
    }
}
export default Tbody;