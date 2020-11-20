import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class DashboardFooter extends React.Component {
    render() {
        return (
            <div className="dashboard-footer">
                <p className="dashboard-footer-text">E1 Finance is a fullstack project made with Ruby, Rails, Javascript, React, and Redux. E1 Finance is not actually an SEC registered broker-dealer and all features are for demonstration purposes only.</p>
                <div className="footer-social">
                    <a href="https://github.com/edmondthui"><FaGithub size={25} style={{color: "#12123D"}}/></a>
                    <a href="https://www.linkedin.com/in/edmond-hui/"><FaLinkedin size={25} style={{color: "#12123D"}}/></a>
                </div>
            </div>
        )
    }
}

export default DashboardFooter