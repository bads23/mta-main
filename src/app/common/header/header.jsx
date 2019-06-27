import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/MTA.svg";

const LeftHeader = () => {
  return (
    <div id="left-header" className="header-sides">
      <div className="top fl-btw mg-v-20">
        <span className="playfair-links">
          <a href="/Music">Music</a>
        </span>
        <span className="playfair-links">
          <a href="/Sports">Sports</a>
        </span>
        <span className="playfair-links">
          <a href="/Entertainers">Entertainers</a>
        </span>
        <span className="playfair-links">
          <a href="/Events">Events</a>
        </span>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

const RightHeader = () => {
  return (
    <div id="right-header" className="header-sides">
      <div className="top fl-btw mg-v-20">
        <span className="playfair-links">
          <a href="/News">News</a>
        </span>
        <span className="playfair-links">
          <a href="/About-us">About Us</a>
        </span>
        <span className="playfair-links">
          <a href="/Contact-us">Contact Us</a>
        </span>
        <span className="playfair-links">
          <a href="/Shop">Shop</a>
        </span>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

const Header = () => {
  return (
    <div id="header">
      <LeftHeader />

      <div className="logo-box">
        <a href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </div>

      <RightHeader />
    </div>
  );
};

export default Header;
