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
            <div className="how-it-works">
                <div>
                    <h1 className="how-it-works-title">Smarter Investing</h1>
                    <p className="how-it-works-text">Build your own investing strategy and keep it in balance automatically. For free.</p>
                </div>
            </div>
            <div className="why-e1">
                {/* I WILL REPLACE THIS WITH MORE PERSONAL INFO LATER! */}
                <h1>We believe:</h1>
                <div className="why-e1-container">
                    <img src="https://i.postimg.cc/vZngvcd8/choice-1-768x768.png" alt="" height="350" width="350"/>
                    <div className="why-e1-text"> 
                        <h2>Your financial goals are personal and unique to you. You should have total choice, control, and transparency over how you achieve them.</h2>
                        <p>This includes choosing the stocks and ETFs you like and having the capability to move your money freely among your various M1 accounts.</p>
                    </div>
                </div>
                <div className="why-e1-container">
                    <div className="why-e1-text">
                        <h2>With the right mindset, approach, and access to easy-to-use tools, you are more than capable enough to reach your goals on your own.</h2>
                        <p>We’re not your advisor, so you need to know what your goals and strategy are. We’ll be here with helpful tips and tools to help you put your strategy to work.</p>
                    </div>
                    <img src="https://i.postimg.cc/RVNnNgsH/goals-5b-1-768x768.png" alt="" height="350" width="350"/>
                </div>
                <div className="why-e1-container">
                    <img src="https://i.postimg.cc/pX458K41/race-2-768x587.png" alt="" height="350" width="350"/>
                    <div className="why-e1-text">
                        <h2>Wealth building is a marathon, not a sprint, and it should be available to all who want to run that race, no matter where they’re starting from.</h2>
                        <p>We don’t believe in day trading or speculating as viable ways to build long-term wealth, so we didn’t build M1 to do that. M1 can be a great companion to other investing apps, but if you’re only looking to day trade, you’ll have better luck elsewhere.</p>
                    </div>
                </div>
                <div className="why-e1-container">
                    <div className="why-e1-text">
                        <h2>Fees and expenses in the investment industry are too high, and we’re committed to driving them to zero through the smart and innovative use of technology and automation.</h2>
                        <p>Every dollar you don’t pay in fees is another dollar in your pocket, to spend or further compound for your future.</p>
                    </div>
                    <img src="https://i.postimg.cc/JhWyYM1N/low-cost-768x768.png" alt="" height="350" width="350" />
                </div>
                <div className="why-e1-container">
                    <img src="https://i.postimg.cc/c1DnxpmW/consistency-1-768x768.png" alt="" height="350" width="350"/>
                    <div className="why-e1-text">
                        <h2>Following a committed approach of buying, regularly investing in, and holding ownership of a diverse and balanced set of investments for a long period of time is one of the best ways to build sustainable wealth.</h2>
                        <p>Finance is like fitness. There is no magic pill or button that will give you the results you want quickly. You need a plan and you need to be diligent about following it to make long-lasting change.</p>
                    </div>
                </div>
            </div>
            <div className="footer-signup-bar">
                <h1 className="how-it-works-title">If you’re looking to invest for the long-term, with full customization and automation, look no further.</h1>
                <p className="how-it-works-text">We’d love to have you aboard. Sign up today to get started.</p>
                <Link className="footer-signup" to="/signup">Sign Up</Link>
            </div>
        </main>
    )
}

export default SplashPage