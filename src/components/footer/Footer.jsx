import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import BackToTop from "../top/BackToTop";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <ul>
          <li style={{ background: "linear-gradient(#808cba,#345492)" }}>
            <a href="https://www.facebook.com/makeupcna" className="icons">
              <FontAwesomeIcon icon={faFacebook} className="fIcon" />
            </a>
          </li>
          <li style={{ background: "linear-gradient(#FFA9C6,#F434E2)" }}>
            <a href="https://www.instagram.com/makeupwithcna/" className="icons">
              <FontAwesomeIcon icon={faInstagram} className="fIcon" />
            </a>
          </li>
          <li style={{ background: "linear-gradient(#dc473d,#b41e20)" }}>
            <a href="https://www.youtube.com/@cnacna710" className="icons">
              <FontAwesomeIcon icon={faYoutube} className="fIcon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-img">
        <img src={Logo} alt="" />
        <BackToTop />
      </div>
    </div>
  );
};

export default Footer;
