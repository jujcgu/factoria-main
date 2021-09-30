import React from 'react'

import { Row } from 'react-bootstrap'
import Thead from './thead'
import Tbody from './tbody'


export default function Tabla() {

    return (
        <Row>
            <Thead/>
            <br />
            <Tbody/>
        </Row>
    );
}