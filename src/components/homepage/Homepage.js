import React, { Component } from 'react';

import { Container, CardDeck, Col, Row } from 'reactstrap'
import DNDCard from '../AboutDND/DNDCard'
import DMCard from '../AboutDND/DMCard'
import DungeonMasteryCard from '../AboutDungeonMastery/DungeonMasteryCard'


class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <CardDeck>
                                <DNDCard />
                                <DungeonMasteryCard />
                                <DMCard />
                            </CardDeck>
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

export default Homepage;