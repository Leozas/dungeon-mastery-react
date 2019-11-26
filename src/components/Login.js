import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
  
    handleChange(event){
      this.setState({ 
        email: event.target.value,
        password: event.target.value });
    };
  
    handleSubmit(event){
      event.preventDefault();
  
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
  
      axios.post('http://127.0.0.1:8000/api/login', user)
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
      
    };
    render() {
      return (
        <Container> Login
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="loginUsername">Username:</Label>
                  <Input type="text" name="username" id="loginUsername" placeholder="Username" maxLength="12" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="loginEmail">Email:</Label>
                  <Input type="email" name="email" id="loginEmail" placeholder="hello@emample.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="loginPassword">Password:</Label>
                  <Input type="password" name="password" id="loginPassword" placeholder="Password" maxLength="12" onChange={this.handleChange} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
              </Form >
            </Col>
          </Row>
        </Container>
      );
    }
  }
  

export default Login;