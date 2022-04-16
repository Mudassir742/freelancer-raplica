import React from "react";
import * as Icon from "@tabler/icons";

import Logo from "../../assets/imgs/footer-logo.svg";
import Apple from "../../assets/imgs/apple-appstore.png";
import Android from "../../assets/imgs/andorid-playstore.png";

const Footer = () => {
  return (
    <section className="footer-container py-8">
      <div>
        <div className="col-left">
          <div className="logo">
            <img src={Logo} alt="logo" className="footer-logo" />
          </div>
          <div className="footer-divider language">
            <Icon.IconWorld />
            <span>English - US(International)</span>
          </div>
          <div className="footer-divider support">
            <Icon.IconHelp />
            <span>Help & Support</span>
          </div>
        </div>
        <div className="footer-navigation my-4">
          <div className="social">
            <div className="stores d-flex align-items-center">
              <img src={Apple} alt="apple" />
              <img src={Android} alt="android" />
            </div>
            <div className="social-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-wifi"></i>
            </div>
          </div>
          <div className="footer-divider"></div>
        </div>
        <div className="aside">
          <div className="user-info">
            <span className="count">58,855,541</span>
            <span className="text">Register Users</span>
          </div>
          <div className="job-info my-2">
            <span className="count">21,372,212</span>
            <span className="text">Total Jobs</span>
          </div>
          <div className="copyright">
            <p>
              Freelancer ® is a registered Trademark of Freelancer Technology
            </p>
            <p>
              Copyright © 2022 Freelancer Technology Pty Limited (ACN 142 189
              759)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
