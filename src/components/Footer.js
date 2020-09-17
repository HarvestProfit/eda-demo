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
          Made with
          {' '}
          <a className="text-dark" href="https://www.youtube.com/watch?v=Xe1TZaElTAs">
            <i className="fas fa-heart" />
          </a>
          {' '}
          by
          {' '}
          <a className="text-dark" href="https://www.harvestprofit.com">Harvest Profit</a>
        </span>
        <NavbarBrand href="https://github.com/HarvestProfit/eda-demo">
          Source Code
        </NavbarBrand>
      </Navbar>
    </footer>
  );
}

export default Footer;
