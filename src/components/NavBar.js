import React from 'react';
import '../design.css';
import {Container,  Navbar,  Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

// Renders the content for NavBar 
const NavBar = (props) => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="py-4">
          <Navbar.Brand className="name" >UW <span>UNDERGRADUATE</span> ADVISING</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className="tabs">
              <Nav className="mr-auto">
                <Link className="mr-4" to="/home">Home</Link>
                <Link className="mr-4" to="/deptadvising">Departmental Advising</Link>
                <Link className='mr-4' to='/about'>About</Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;
