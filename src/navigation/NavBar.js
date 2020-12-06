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
          <Navbar.Brand className="name" href="/">UW <span>UNDERGRADUATE</span> ADVISING</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className="tabs">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/depadvising">Departmental Advising</Nav.Link>
                <Nav.Link href="/">Log In</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;




// Reactstrap nav bar
{/* <div>
<Navbar color="faded" light>
  <NavbarBrand href="/" className="mr-auto navbarBrand">
      UW Undergraduate Advising
  </NavbarBrand>
  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
  <Collapse isOpen={!collapsed} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="/departmentaladvising">Departmental Advising</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
</div> */}

// Old nav bar
{/* export function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md-lg py-5">
                <li className="navList">
                    <span className="logo" aria-hidden="true">
                        &nbsp;
                    </span>
                    <a className="nav-link" href="/">UW Undergraduate Advising</a>
                </li>
                <li>
                    <a href='/departmentaladivisng' className='nav-link'>Departmental Advising</a>
                </li>
            </nav>
        </div>
    )
} */}
