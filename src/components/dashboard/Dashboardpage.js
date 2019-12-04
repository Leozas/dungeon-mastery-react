import React, { Component } from 'react'
import { Container, Col, Row, Table } from 'reactstrap'
import axios from 'axios'
import NavbarMain from '../homepage/NavbarMain'

class Dashboardpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            armors: [],
        }
    }



    render() {
        return (
            <NavbarMain/>
            

        )
    }
}

export default Dashboardpage;