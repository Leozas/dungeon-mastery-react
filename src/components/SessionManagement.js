import React, { Component } from 'react';


import Register from './Register'
import Login from './Login'
import Logout from './Logout'

class SessionManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            message: ''
        };
    }
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return (
            <>
                <Register />
                <Login />
                <Logout />
            </>
        );
    }
}

export default SessionManagement;