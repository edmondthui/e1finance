import React from 'react';
import { Route } from 'react-router-dom'
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import StockShowPage from './stock_show_page_container'
import DashboardFooter from '../portfolio/dashboard_footer'

class StockShow extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/stocks/:stockId" component={StockShowPage} />
                <DashboardFooter/>
            </div>
        )
    }
}

export default StockShow