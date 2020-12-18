import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaAddressCard,
} from "react-icons/fa";

class DashboardFooter extends React.Component {
  render() {
    return (
      <div className="dashboard-footer">
        <p className="dashboard-footer-text">
          E1 Finance is a fullstack project made with Ruby, Rails, Javascript,
          React, and Redux. E1 Finance is not actually an SEC registered
          broker-dealer and all features are for demonstration purposes only.
        </p>
        <div className="footer-social">
          <a href="https://github.com/edmondthui" target="_blank">
            <FaGithub size={30} style={{ color: "#12123D" }} />
          </a>
          <a href="https://www.linkedin.com/in/edmond-hui/" target="_blank">
            <FaLinkedin size={30} style={{ color: "#12123D" }} />
          </a>
          <a href="https://angel.co/u/edmondthui" target="_blank">
            <FaAngellist size={30} style={{ color: "#12123D" }} />
          </a>
          <a href="https://edmondhui.com/" target="_blank">
            <FaAddressCard size={30} style={{ color: "#12123D" }} />
          </a>
        </div>
      </div>
    );
  }
}

export default DashboardFooter;
