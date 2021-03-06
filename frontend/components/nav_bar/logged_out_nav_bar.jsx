import React from "react";
import { Link } from "react-scroll";
import { withRouter } from "react-router";
import { FaGithub, FaLinkedin, FaAngellist, FaAddressCard } from "react-icons/fa";

const LoggedOutNavBar = (props) => (
  <section className="nav-bar">
    <a href="/">
      <img
        src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png"
        alt="E1 Logo"
        height="50"
        width="50"
      />
    </a>
    <nav className="nav-content">
      <div className="dropdown">
        <Link
          to="how-it-works"
          spy={true}
          smooth={true}
          duration={1000}
          className="dropdown-title"
        >
          How it works
        </Link>
        <Link
          to="why-e1"
          spy={true}
          smooth={true}
          duration={1000}
          className="dropdown-title"
        >
          Why E1
        </Link>
      </div>
    </nav>

    <div className="personal-links">
      <a
        href="https://github.com/edmondthui"
        className="dropdown-title"
        target="_blank"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/edmond-hui/"
        className="dropdown-title"
        target="_blank"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://angel.co/u/edmondthui"
        className="dropdown-title"
        target="_blank"
      >
        <FaAngellist size={30} />
      </a>
      <a
        href="https://edmondhui.com/"
        className="dropdown-title"
        target="_blank"
      >
        <FaAddressCard size={30} />
      </a>
    </div>
    <div className="login-buttons">
      <Link to="/login" id="login" onClick={() => props.history.push("/login")}>
        Login
      </Link>
      <Link
        to="/signup"
        id="signup"
        onClick={() => props.history.push("/signup")}
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default withRouter(LoggedOutNavBar);
