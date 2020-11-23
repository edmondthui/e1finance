import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_show_pie_index_container.js'
import PortfolioInfo from './portfolio_show_info_container'
import { Route, NavLink } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardPortfolio extends React.Component {
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
                <Route path="/dashboard/:portfolioId" component={PortfolioInfo} />
                <PortfolioIndex />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardPortfolio