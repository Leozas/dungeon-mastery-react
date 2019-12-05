import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import PopoverCharacters from './PopoverCharacters'
import PopoverCreatures from './PopoverCreatures'

class Dashboardpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }



    render() {
        return (

            <>
                <Container>
                    <Row>
                        <Col>
                            1
                    </Col>
                        <Col>2
                        <PopoverCharacters />
                        </Col>
                        <Col>3
                    </Col>>
                    <Col>4
                        <PopoverCreatures />
                        </Col>
                        <Col>5
                    </Col>
                    </Row>
                </Container>
            </>


        )
    }
}

export default Dashboardpage;