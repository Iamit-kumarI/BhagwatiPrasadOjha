// Navbar.jsx

import React from "react";
import "./NavBar.css";

import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* ONLY LOGO */}

      <a href="#home" className="navbar-logo">
        <img
          src={logo}
          alt="School Logo"
          className="logo-img"
        />
      </a>

      {/* RIGHT SIDE LINKS */}

      <nav className="nav-links">
        <a href="#about">About</a>

        <a href="#curriculum">
          Academics
        </a>

        <a href="#facilities">
          Facilities
        </a>

        <a href="#faculty">Faculty</a>

        <a
          href="https://www.google.com/"
          className="admission-btn"
        >
          Admission
        </a>
      </nav>
    </header>
  );
};

export default Navbar;