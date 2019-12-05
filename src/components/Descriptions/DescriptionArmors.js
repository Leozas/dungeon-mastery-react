import React, { Component } from 'react'
import { Container, Col, Row, Table, Button, UncontrolledCollapse } from 'reactstrap'
import axios from 'axios'

class DescriptionArmors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            armors: [],
        }
    }

    tableData() {
        if (this.state.armors.length === 0) {
            axios.get('https://dungeonmastery.appspot.com/api/armors')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                        armors: res.data,
                    })
                });
        }

        return this.state.armors.map((armors, index) => {
            const { id, armor, description, armorclass, armortype } = armors //destructuring
            return (

                <tr key={id}>
                    <td>{id}</td>
                    <td>{armor}</td>
                    <td>{description}</td>
                    <td>{armorclass}</td>
                    <td>{armortype}</td>
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
                                Armors
                            </h3>
                            <Col>
                                <p>
                                    D&D worlds are a vast tapestry made up of many different cultures, each with its own technology level. For this reason, adventurers have access to a variety of armor types, ranging from leather armor to chain mail to costly plate armor, with several other kinds of armor in between. The Armor table collects the most commonly available types of armor found in the game and separates them into three categories: light armor, medium armor, and heavy armor. Many warriors supplement their armor with a shield
                                </p>
                            </Col>
                            <Col>
                                <div>
                                    <Button color="primary" id="togglerarmors" style={{ marginBottom: '1rem' }}>
                                        Toggle Description Table
                                     </Button>
                                    <UncontrolledCollapse toggler="#togglerarmors">
                                        <Table responsive bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Armor</th>
                                                    <th>Description</th>
                                                    <th>Armor Class</th>
                                                    <th>Armor Type</th>
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

export default DescriptionArmors;