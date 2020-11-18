import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_show_pie_index_container.js'
import PortfolioInfo from './portfolio_show_info_container'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'
import { Route } from 'react-router-dom'

class DashboardPortfolio extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <Route path="/dashboard/:portfolioId" component={PortfolioInfo} />
                <div className="portfolio-content-container">
                    <div className="portfolio-pie-container">
                        <div className="portfolio-pie">
                            <PortfolioPie/>
                        </div>
                    </div>
                    <div className="portfolio-main-content">
                        <PortfolioChart/> 
                        <h1 className="slice-title">Slices</h1>
                        <PortfolioIndex />
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPortfolio