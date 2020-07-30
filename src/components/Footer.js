import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';


const Footer = (props) => {
  return (
    <footer>
      <Navbar color="light" light>
        <span>
          Made with <i className="fas fa-heart" /> by Harvest Profit
        </span>
        <NavbarBrand href="https://github.com/HarvestProfit/eda-demo">
          Source Code
        </NavbarBrand>
      </Navbar>
    </footer>
  );
}

export default Footer;
