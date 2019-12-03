import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'reactstrap'
import axios from 'axios'

class DescriptionAttributes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attributes: []
        }
    }

    tableData() {
        axios.get('http://127.0.0.1:8000/api/attributes')
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState ({
                    attributes: res.data,
                })
            });

        return this.state.attributes.map((attributes, index) => {
            const {id, attribute, description} = attributes //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{attribute}</td>
                    <td>{description}</td>
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
                            Attributes (Abilities)
                            </h3>
                        <Col>
                            <p>
                                Much of what your character does in the Dungeons and Dragons depends on his or her six Attributes or Abilities: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. Each attribute has a score which determines its' power and refinement.
                                </p>
                        </Col>
                        <Col>
                            <Table responsive bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Attribute</th>
                                        <th>Description</th>
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

export default DescriptionAttributes;