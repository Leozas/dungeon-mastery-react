import React, { Component } from 'react'
import { Container, Col, Row, Table, Button, UncontrolledCollapse } from 'reactstrap'
import axios from 'axios'

class DescriptionSpells extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spells: []
        }
    }

    tableData() {
        if (this.state.spells.length === 0) {
            axios.get('https://dungeonmastery.appspot.com/api/spells')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                        spells: res.data,
                    })
                });
        }

        return this.state.spells.map((spells, index) => {
            const { id, spell, description, range, damage, damagetype } = spells //destructuring
            return (

                <tr key={id}>
                    <td>{id}</td>
                    <td>{spell}</td>
                    <td>{description}</td>
                    <td>{range}</td>
                    <td>{damage}</td>
                    <td>{damagetype}</td>
                </tr>
            )
        })
    }

    render() {
        //const {} = 

        return (

            <>
                <Container>
                    <Row>
                        <Col className="bg-secondary">
                            <h3>
                                Spells
                            </h3>
                            <Col>
                                <p>
                                    A spell is a discrete magical effect, a single shaping of the magical energies that suffuse the multiverse into a specific, limited expression. In casting a spell, a character carefully plucks at the invisible strands of raw magic suffusing the world, pins them in place in a particular pattern, sets them vibrating in a specific way, and then releases them to unleash the desired effect — in most cases, all in the span of seconds.

    Spells can be versatile tools, weapons, or protective wards. They can deal damage or undo it, impose or remove conditions, drain life energy away, and restore life to the dead.

    The spells we will use in Dungeon Mastery will only be offensive in nature.
</p>
                            </Col>
                            <Col>
                                <div>
                                    <Button color="primary" id="togglerspells" style={{ marginBottom: '1rem' }}>
                                        Toggle Description Table
                                     </Button>
                                    <UncontrolledCollapse toggler="#togglerspells">
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
                                                {this.tableData()}
                                            </tbody>
                                        </Table>
                                    </UncontrolledCollapse>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}

export default DescriptionSpells;