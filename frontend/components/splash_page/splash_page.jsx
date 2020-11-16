import React from 'react';
import LoggedOutNavBar from '../nav_bar/logged_out_nav_bar'
import { Link } from 'react-router-dom'

const SplashPage = (props) => {
    return (
        <main>
            <LoggedOutNavBar/>
            <div className="splash-container">
                <div className="splash-text">
                    <h1>THE FINANCE SUPER APP</h1>
                    <p>Invest, borrow, and spend, all in one place. You set your strategy, we automate it. For free.</p>
                    <Link id="signup" to="/signup">Get Started</Link>
                </div>
                <div className="splash-image">
                    <img src="https://i.imgur.com/efLJKh8.png" alt="E1 Pies"/>
                </div>
            </div>
        </main>
    )
}

export default SplashPage