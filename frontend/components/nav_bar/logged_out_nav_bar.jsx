import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const LoggedOutNavBar = (props) => (
    <section className="nav-bar">
        <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo" height="50" width="50"/>
        <nav className="nav-content">

            <div className="dropdown">
                <Link activeClass="active" to="how-it-works" spy={true} smooth={true} duration={1000} className="dropdown-title">How it works</Link>
                {/* <p className="dropdown-title">How it works</p> */}
                    {/* <div className="dropdown-content">
                        <a href="#">Test</a>
                    </div> */}
                <Link activeClass="active" to="why-e1" spy={true} smooth={true} duration={1000} className="dropdown-title">Why E1</Link>
                {/* <p className="dropdown-title">Why E1</p> */}
                    {/* <div className="dropdown-content">
                        <a href="#">Test</a>
                    </div> */}
                {/* <p className="dropdown-title">Insights</p>
                    <div className="dropdown-content">
                        <a href="#">Test</a>
                    </div> */}
                {/* <p className="dropdown-title">FAQs</p>
                    <div className="dropdown-content">
                        <a href="#">Test</a>
                    </div> */}
            </div>
        </nav>
        <div className="login-buttons">
            <Link id="login" to='/login'>Login</Link>
            <Link id="signup" to='/signup'>Get Started</Link>
        </div>
    </section>
)

export default LoggedOutNavBar