import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Register = (props) => {
/*
  axios({
    method: 'post',
    url: '/login',
    data: {
      firstName: 'Finn',
      lastName: 'Williams'
    }
  });
  */

  return (
    <Form>
      <FormGroup>
        <Label for="registrationEmail">Email</Label>
        <Input type="email" name="email" id="registrationEmail" placeholder="hello@emample.com" />
      </FormGroup>
      <FormGroup>
        <Label for="registrationPassword">Password</Label>
        <Input type="password" name="password" id="registrationPassword" placeholder="Password" maxLength="12"/>
      </FormGroup>
      <FormGroup>
        <Label for="registrationPassword">First Name</Label>
        <Input type="text" name="firstname" id="registrationFirstName" placeholder="First Name" maxLength="12"/>
      </FormGroup>
      <FormGroup>
        <Label for="registrationPassword">Last Name</Label>
        <Input type="text" name="lastname" id="registrationPassword" placeholder="Last Name" maxLength="12"/>
      </FormGroup>
      <FormGroup>
        <Label for="registrationPassword">Username</Label>
        <Input type="text" name="username" id="registrationUsername" placeholder="Username" maxLength="12"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default Register;