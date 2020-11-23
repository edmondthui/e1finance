import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import StockNewsIndex from './stock_news_index_container'
import StockInfo from './stock_info_container'
import { Route, NavLink } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardStock extends React.Component {
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
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockInfo} />
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockNewsIndex} />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardStock