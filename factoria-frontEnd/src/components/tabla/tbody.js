import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
const List = (props) => (
    <>
        {props.items.map((item) => {
            return (<>
                <Row className="ContainerTd align-content-center">
                    <Col xs={4} md={4}>
                        {item.id}
                    </Col>
                    <Col xs={4} md={4}>
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
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/paises', { method: 'GET' })
            .then(result => result.json())
            .then(items => this.setState({
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