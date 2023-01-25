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
        <Link to="/" className="home">
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
            <a href="mailto:Support@aibanc.co"> Support@aibanc.co</a>
          </li>
        </ul>

        <ul className="footer-menu2">
          <a href="https://www.facebook.com/Aibanc?mibextid=LQQJ4d">
            <button className="facebook">
              <FaFacebookF />
            </button>
          </a>

          <a href="https://twitter.com/aibanchq?s=11&t=fnzPT-S4OffEc4RRjjSsew">
            {" "}
            <button className="twitter">
              <FaTwitter />
            </button>
          </a>

          <a href="https://instagram.com/aibanchq?igshid=MWI4MTIyMDE=">
            <button className="insta">
              <FaInstagram />
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
