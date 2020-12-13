import React from "react";
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
        {/* <span className="playfair-links">
          <a href="/Entertainers">Entertainers</a>
        </span> */}
        {/* <span className="playfair-links">
          <a href="/Events">Events</a>
        </span> */}
        <span className="playfair-links">
          <a href="/News">News</a>
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
        {/* <span className="playfair-links">
          <a href="/News">News</a>
        </span> */}
        <span className="playfair-links">
          <a href="/About-us">About Us</a>
        </span>
        <span className="playfair-links">
          <a href="/Contact-us">Contact Us</a>
        </span>
        <span className="playfair-links">
          <a
            href="http://store.motiontalentafrica.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop
          </a>
        </span>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

const openMenu = () => {
  const menuBar = document.getElementById("mobileMenuBar");
  menuBar.style.display = "block";
};

const closeMenu = () => {
  const menuBar = document.getElementById("mobileMenuBar");
  menuBar.style.display = "none";
};

const Mobile = () => {
  return (
    <>
      <span id="mobileMenu" onClick={openMenu}>
        <i className="fas fa-bars lg-text icon gold"></i>
      </span>

      <div id="mobileMenuBar">
        <div id="menu-items">
          <div className="pd-20">
            <h2 className="playfair-lg">Menu</h2>
          </div>
          <a href="/">
            <span>Home</span>
          </a>
          <a href="/News">
            <span>News</span>
          </a>
          <a href="/Music">
            <span>Music</span>
          </a>
          <a href="/Sports">
            <span>Sports</span>
          </a>
          {/* <a href="/Entertainers">
            <span>Entertainers</span>
          </a> */}
          {/* <a href="/Events">
            <span>Events</span>
          </a> */}
          <a href="/about-us">
            <span>About Us</span>
          </a>
          <a href="/contact-us">
            <span>Contact us</span>
          </a>
          <a
            href="https://store.motiontalentafrica.co.ke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Shop</span>
          </a>
        </div>
        <span id="close-btn" onClick={closeMenu}>
          <i className="fas fa-times lg-text icons"></i>
        </span>
      </div>
    </>
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
      <Mobile />
      <RightHeader />
    </div>
  );
};

export default Header;
