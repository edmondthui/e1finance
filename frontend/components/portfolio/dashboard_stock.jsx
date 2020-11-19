import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import StockNewsIndex from './stock_news_index_container'
import StockInfo from './stock_info_container'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'
import { Route } from 'react-router-dom'
import DashboardFooter from './dashboard_footer'

class DashboardStock extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockInfo} />
                {/* <div className="portfolio-content-container">
                    <div className="portfolio-pie-container">
                        <div className="portfolio-pie">
                            <PortfolioPie/>
                        </div>
                    </div>
                    <div className="portfolio-main-content">
                        <PortfolioChart/> 
                        <h1 className="slice-title">Markets</h1>
                        <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockNewsIndex} />
                    </div>
                </div> */}
                <Route path="/dashboard/:portfolioId/:pieId/:stockId" component={StockNewsIndex} />
                <DashboardFooter/>
            </div>
        )
    }
}

export default DashboardStock