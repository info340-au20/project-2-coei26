import React, { useState } from 'react';
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'react-bootstrap';
import { Router, Link } from 'react-router-dom';
import '../design.css';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'react-bootstrap';

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () =>  {
        setCollapsed(!collapsed);
    }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="py-4">
          <Navbar.Brand className="name" >UW <span>UNDERGRADUATE</span> ADVISING</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className="tabs">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/deptadvising">Departmental Advising</Nav.Link>
                <Nav.Link href="/">Log In</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;
