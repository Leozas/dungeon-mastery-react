import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login';
import Register from './Register'
import Logout from './Logout';

class SessionControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <Container>
          <Row>
              <Col>
              <Register />
              </Col>
              <Col>
              <Login />
              </Col>
              <Col>
              <Logout />
              </Col>
          </Row>
      </Container>
    );
  }
}

export default SessionControl;