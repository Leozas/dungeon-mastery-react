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
                                D&D worlds are a vast tapestry made up of many different cultures, each with its own technology level. For this reason, adventurers have access to a variety of armor types, ranging from leather armor to chain mail to costly plate armor, with several other kinds of armor in between. The Armor table collects the most commonly available types of armor found in the game and separates them into three categories: light armor, medium armor, and heavy armor. Many warriors supplement their armor with a shield
                                </p>
                            </Col>
                            <Col>
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