import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_index_container'
import PortfolioInfo from './portfolio_info_container'
import DashboardFooter from './dashboard_footer'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <PortfolioInfo/>
                <PortfolioIndex />
                <DashboardFooter/>
            </div>
        )
    }
}

export default Dashboard