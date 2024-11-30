import React from "react";
import { LuInstagram, LuTwitter } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWraper">
        <div className="left">
          <h2>MedSave</h2>
          <span>Follow us</span>
          <div className="divIcon">
            <div>
              <LuInstagram />
            </div>
            <div>
              <CiFacebook />
            </div>
            <div>
              <LuTwitter />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="first">
            <h4>Company</h4>
            <div className="others">
              <span>About us</span>
              <span>Privacy policy</span>
              <span>Terms of use</span>
            </div>
          </div>
          <div className="first">
            <h4>Community</h4>
            <div className="others">
              <span>Specialists</span>
              <span>Patients</span>
              <span>Blog</span>
            </div>
          </div>
          <div className="first">
            <h4>Help</h4>
            <div className="others">
              <span>Support</span>
              <span>FAQ</span>
              <span>Mobile App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
