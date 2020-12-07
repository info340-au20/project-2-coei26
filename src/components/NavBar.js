import React from 'react';
import '../design.css';
import {Container,  Navbar,  Nav} from 'react-bootstrap';

const NavBar = (props) => {
    // const [collapsed, setCollapsed] = useState(true);
  
    // const toggleNavbar = () =>  {
    //     setCollapsed(!collapsed);
    // }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="py-4">
          <Navbar.Brand className="name" >UW <span>UNDERGRADUATE</span> ADVISING</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container className="tabs">
              <Nav className="mr-auto">
                <Nav.Link className="mr-4" href="/home">Home</Nav.Link>
                <Nav.Link className="mr-4" href="/deptadvising">Departmental Advising</Nav.Link>
                <Nav.Link className="mr-4" href="/">Log In</Nav.Link>
                <Nav.Link className="mr-4" href="/">My Favorites</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;
