import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event){
    this.setState({ 
      firstname: event.target.value,
      lastname: event.target.value,
      username: event.target.value,
      email: event.target.value,
      password: event.target.value });
  };

  handleSubmit(event){
    event.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post('http://127.0.0.1:8000/api/register', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    
  };
  render() {
    return (
      <Container> Register
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="registrationFirstname">First Name:</Label>
                <Input type="text" name="firstname" id="registrationFirstName" placeholder="First Name, Maximum 12 Characters" maxLength="12" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="registrationLastname">Last Name:</Label>
                <Input type="text" name="lastname" id="registrationLastname" placeholder="Last Name, Maximum 12 Characters" maxLength="12" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="registrationUsername">Username:</Label>
                <Input type="text" name="username" id="registrationUsername" placeholder="Username, Maximum 12 Characters" maxLength="12" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="registrationEmail">Email:</Label>
                <Input type="email" name="email" id="registrationEmail" placeholder="hello@emample.com" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="registrationPassword">Password:</Label>
                <Input type="password" name="password" id="registrationPassword" placeholder="Password, Maximum 12 Characters" maxLength="12" onChange={this.handleChange} />
              </FormGroup>
              <Button type='submit'>Submit</Button>
            </Form >
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;