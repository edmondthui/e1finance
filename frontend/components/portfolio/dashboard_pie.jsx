import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './pie_show_index_container'
import PortfolioInfo from './pie_show_info_container'
import { Route } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardPie extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/dashboard/:portfolioId/:pieId" component={PortfolioInfo} />
                <PortfolioIndex />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardPie