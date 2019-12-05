import React, { Component, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import Logout from './sessioncontroller/Logout';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"


import Homepage from './homepage/Homepage'
import SessionControl from './sessioncontroller/SessionControl'
import DescriptionPages from './Descriptions/DescriptionPages'
import Dashboardpage from './dashboard/Dashboardpage';

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>    
        <Navbar color="warning" light expand="md" className="mx-auto">
          <NavbarBrand href="">
            <img className="img-fluid overflow-auto" src="https://www.freelogodesign.org/file/app/client/thumb/c974fa44-00b9-4fa0-add8-7731d61b91c9_200x200.png?1575402373052">
            </img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto text-light" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/sessioncontrol">Register/Login/Logout</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Descriptions
        </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/descriptions">Attributes</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/descriptions">Weapons</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/descriptions">Armor</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/descriptions">Spells</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>

          <Route path="/sessioncontrol">
            <SessionControl />
          </Route>
          <Route path="/descriptions">
            <DescriptionPages />
          </Route>
          <Route path="/dashboard">
            <Dashboardpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default NavbarMain;