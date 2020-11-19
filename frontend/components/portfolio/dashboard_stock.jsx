import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import StockNewsIndex from './stock_news_index_container'
import StockInfo from './stock_info_container'
import { Route } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardStock extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockInfo} />
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockNewsIndex} />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardStock