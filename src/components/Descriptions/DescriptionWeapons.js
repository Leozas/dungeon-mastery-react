import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'reactstrap'
import axios from 'axios'

class DescriptionWeapons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapons: []
        }
    }

    tableData() {
        if (this.state.weapons.length === 0) {
            axios.get('https://dungeonmastery.appspot.com/api/attributes')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                        weapons: res.data,
                    })
                });
        }

        return this.state.weapons.map((weapons, index) => {
            const { id, weapon, description, weapontype, damage, damagetype } = weapons //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{weapon}</td>
                    <td>{description}</td>
                    <td>{weapontype}</td>
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
                        <Col>
                            <h3>
                                Armors
                            </h3>
                            <Col>
                                <p>
                                    Your class grants proficiency in certain weapons, reflecting both the class's focus and the tools you are most likely to use. Whether you favor a longsword or a longbow, your weapon and your ability to wield it effectively can mean the difference between life and death while adventuring.

                                    The Weapons table shows the most common weapons used in the worlds of D&D, their price and weight, the damage they deal when they hit, and any special properties they possess. Every weapon is classified as either melee or ranged. A melee weapon is used to attack a target within 5 feet of you, whereas a ranged weapon is used to attack a target at a distance.
                                </p>
                            </Col>
                            <Col>
                                <Table responsive bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Weapon</th>
                                            <th>Description</th>
                                            <th>Weapon Type</th>
                                            <th>Damage</th>
                                            <th>Damage Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.tableData()}
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

export default DescriptionWeapons;