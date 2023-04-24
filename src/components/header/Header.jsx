import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import Bars from "../../assets/images/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {/* <span style={{color:"white",fontSize:"20px",fontStyle:"bold"}}>Logo</span> */}
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt="Bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="service"
              spy={true}
              smooth={true}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="gallery"
              spy={true}
              smooth={true}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="pricing"
              spy={true}
              smooth={true}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
