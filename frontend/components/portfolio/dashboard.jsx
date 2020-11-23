import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_index_container'
import PortfolioInfo from './portfolio_info_container'
import DashboardFooter from './dashboard_footer'
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink to="/dashboard" activeclass="active" className="research-nav-content">Portfolio</NavLink>
                        <NavLink exact to="/activity" activeclass="active" className="research-nav-content">Activity</NavLink>
                        <NavLink exact to="/holdings" activeclass="active" className="research-nav-content">Holdings</NavLink>
                    </div>
                </div>
                <PortfolioInfo/>
                <PortfolioIndex />
                <DashboardFooter/>
            </div>
        )
    }
}

export default Dashboard