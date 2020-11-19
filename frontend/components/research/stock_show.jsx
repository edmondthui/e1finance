import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import StockShowPage from './stock_show_page_container'
import DashboardFooter from '../portfolio/dashboard_footer'

class StockShow extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink exact to="/research" activeclass="active" className="research-nav-content">Market News</NavLink>
                        <NavLink to="/research/stocks" activeclass="active" className="research-nav-content">Stocks</NavLink>
                    </div>
                </div>
                <Route path="/stocks/:stockId" component={StockShowPage} />
                <DashboardFooter/>
            </div>
        )
    }
}

export default StockShow