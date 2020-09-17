import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as ReactstrapNavLink,
} from 'reactstrap';

import whiteLogo from '../assets/logo-white-100.png';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={NavLink} to="/">
          <img className="img-fluid" alt="Harvest Profit" src={whiteLogo} height="30" width="30" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink component={ReactstrapNavLink} to="/form">Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink component={ReactstrapNavLink} to="/calculator">Calculator</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <Link component={ReactstrapNavLink} to="/">Home</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Navigation;
