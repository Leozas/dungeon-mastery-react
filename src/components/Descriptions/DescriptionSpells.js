import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'reactstrap'

class DescriptionArmors extends Component {
    constructor(props) {
        super(props)
        this.state = []
    }

    render() {
        //const {} = 

        return (

            <>
                <Container>
                    <Row>
                        <Col>
                            <h3>
                                Armors
                            </h3>
                            <Col>
                                <p>
                                    A spell is a discrete magical effect, a single shaping of the magical energies that suffuse the multiverse into a specific, limited expression. In casting a spell, a character carefully plucks at the invisible strands of raw magic suffusing the world, pins them in place in a particular pattern, sets them vibrating in a specific way, and then releases them to unleash the desired effect — in most cases, all in the span of seconds.

    Spells can be versatile tools, weapons, or protective wards. They can deal damage or undo it, impose or remove conditions, drain life energy away, and restore life to the dead.

    The spells we will use in Dungeon Mastery will only be offensive in nature.
</p>
                            </Col>
                            <Col>
                                <Table responsive bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Spell</th>
                                            <th>Description</th>
                                            <th>Range</th>
                                            <th>Damage</th>
                                            <th>Damage Type</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                    </tbody>
                                </Table>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}

export default DescriptionArmors;