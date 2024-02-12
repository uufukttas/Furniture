import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container w-full h-screen">
      <div className="header-left">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="header-brand">ALL</div>
      </div>
      <div className="header-title">BRAND</div>
      <div className="header-right">
        <div className="header-cart">CART</div>
      </div>
    </div>
  );
};

export default Header;
