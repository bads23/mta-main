import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/MTA.svg";

const LeftHeader = () => {
  return (
    <div id="left-header" className="header-sides">
      <div className="top fl-btw mg-v-20">
        <span className="playfair-links">
          <a href="/login">Music</a>
        </span>
        <span className="playfair-links">
          <a href="/register">Sports</a>
        </span>
        <span className="playfair-links">
          <a href="/register">Entertainers</a>
        </span>
        <span className="playfair-links">
          <a href="/register">Events</a>
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
          <a href="/login">News</a>
        </span>
        <span className="playfair-links">
          <a href="/login">About Us</a>
        </span>
        <span className="playfair-links">
          <a href="/register">Shop</a>
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
