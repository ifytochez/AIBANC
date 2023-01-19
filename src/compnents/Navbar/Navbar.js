import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/home">
        <img src="/Images/logo.png" alt="" className="logo" />
      </Link>

      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/company">
          <li>Our Company</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/faqs">
          <li>FAQs</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
