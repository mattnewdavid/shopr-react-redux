import React from "react";
import Cart from "../Cart/CartHeader";
import "./Header.css";
import Navigation from "react-sticky-nav";
const Header = () => {
  return (
    <header>
      <Navigation className="header-nav">
        <h4 className="header-h2">Redux Shopping Here</h4>
        <ul className="header-ul">
          <li>
            <Cart />
          </li>
        </ul>
      </Navigation>
    </header>
  );
};

export default Header;
