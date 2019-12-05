import React, { Component } from 'react'
import axios from 'axios';
import { Button, }from 'reactstrap';

export default class Logout extends Component {
    
    logout(e) {
        const token = localStorage.getItem('user_token')
        const content = {
            headers: {
                'Authorization':"Bearer " + token
            }
        };
        axios.get('https://dungeonmastery.appspot.com/api/logout', content).then((response) => {
            window.location.href="/login";
        });
        localStorage.removeItem('user_token');
    }
    render() {
        return (
            <div>
                <Button onClick={this.logout} href="/sessioncontrol" role="button"  color="primary">
                    Logout
                </Button>
            </div>
        )
    }
}