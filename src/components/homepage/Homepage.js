import React, { Component } from 'react';

import NavbarMain from './NavbarMain';
import AnimatedSpellbook from './AnimatedSpellbook';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <>

                <NavbarMain />
                <AnimatedSpellbook />
                

            </>

        );
    }
}

export default Homepage;