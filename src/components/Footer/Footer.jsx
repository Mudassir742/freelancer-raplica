import React from "react";
import * as Icon from "@tabler/icons";

import Logo from "../../assets/imgs/footer-logo.svg";
import Apple from "../../assets/imgs/apple-appstore.png";
import Android from "../../assets/imgs/andorid-playstore.png";

const Footer = () => {
  return (
    <section className="footer-container d-flex align-items-center justify-content-center py-8">
      <div className="footer-content w-100">
        <div className="footer-navigation-part d-lg-flex flex-lg-row flex-md-column justify-content-lg-between">
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
          <div className="footer-navigation my-4 d-md-flex  justify-content-md-evenly">
            <div className="freelancer">
              <ul className="p-0">
                <li className="list-heading text-light mb-2 fs-6">
                  Freelancer
                </li>
                <li>Categories</li>
                <li>Projects</li>
                <li>contests</li>
                <li>Freelancers</li>
                <li>Enterprise</li>
                <li>Preferred Freelancer Program</li>
                <li>Project Management</li>
                <li>Local Jobs</li>
                <li>Photo Anywhere</li>
                <li>Showcase</li>
                <li>API for Developers</li>
              </ul>
            </div>
            <div className="about">
              <ul className="p-0">
                <li className="list-heading text-light mb-2 fs-6">About</li>
                <li>About us</li>
                <li>How it Works</li>
                <li>Security</li>
                <li>Investor</li>
                <li>Sitemap</li>
                <li>Stories</li>
                <li>news</li>
              </ul>
            </div>
            <div className="terms">
              <ul className="p-0">
                <li className="list-heading text-light mb-2 fs-6">Terms</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Copyright Policy</li>
                <li>Code of Conduct</li>
                <li>Fees and Charges</li>
              </ul>
            </div>

            <div className="social">
              <li className="list-heading text-light mb-3 fs-6">Apps</li>

              <div className="stores d-flex align-items-center">
                <img src={Apple} alt="apple" />
                <img src={Android} alt="android" />
              </div>
              <div className="social-icons my-3 d-flex align-items-center justify-content-between">
                <Icon.IconBrandFacebook />
                <Icon.IconBrandInstagram />
                <Icon.IconBrandYoutube />
                <Icon.IconBrandTwitter />
                <Icon.IconWifi />
              </div>
            </div>
          </div>
        </div>
        <div className="divider w-100"></div>
        <div className="aside d-lg-flex align-items-lg-center justify-content-lg-between">
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
