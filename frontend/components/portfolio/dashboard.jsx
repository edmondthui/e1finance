import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import PortfolioIndex from './portfolio_index_container'
import PortfolioInfo from './portfolio_info_container'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <PortfolioInfo/>
                <div className="portfolio-content-container">
                    <div className="portfolio-pie-container">
                        <div className="portfolio-pie">
                            <PortfolioPie/>
                        </div>
                    </div>
                    <div className="portfolio-main-content">
                        <PortfolioChart/> 
                        <PortfolioIndex />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard