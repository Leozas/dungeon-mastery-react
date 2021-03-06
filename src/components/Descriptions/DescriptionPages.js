import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import DescriptionAttributes from './DescriptionAttributes';
import DescriptionWeapons from './DescriptionWeapons';
import DescriptionArmors from './DescriptionArmors';
import DescriptionSpells from './DescriptionSpells';

class SessionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <Container fluid >
          <Row>
              <Col>>
              <DescriptionAttributes />
              </Col>
              <Col>
              <DescriptionWeapons />
              </Col>
              <Col>
              <DescriptionArmors />
              </Col>
              <Col>
              <DescriptionSpells />
              </Col>
          </Row>
      </Container>
    );
  }
}

export default SessionControl;