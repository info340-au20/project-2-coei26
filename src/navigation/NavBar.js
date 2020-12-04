import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Example = (props) => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () =>  {
        setCollapsed(!collapsed);
    }

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto navbarBrand">
              UW Undergraduate ADvising
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
      </div>
    );
  }
  
  export default Example;






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
