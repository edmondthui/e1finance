import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_show_pie_index_container.js'
import PortfolioInfo from './portfolio_show_info_container'
import { Route } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardPortfolio extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/dashboard/:portfolioId" component={PortfolioInfo} />
                <PortfolioIndex />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardPortfolio