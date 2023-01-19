import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <nav className="footer-navbar">
      <div className="footer-container">
        <Link to="/home" className="home">
          <img src="/Images/logo.png" alt="" className="footer-logo" />
        </Link>

        <ul className="footer-menu1">
          <Link to="/company">
            <li>Our Company</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/faqs">
            <li>FAQs</li>
          </Link>
          <li>
            <a href="#"> Support@aibanc.co</a>
          </li>
        </ul>

        <ul className="footer-menu2">
          <button className="facebook">
            <FaFacebookF />
          </button>
          <button className="twitter">
            <FaTwitter />
          </button>
          <button className="insta">
            <FaInstagram />
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
