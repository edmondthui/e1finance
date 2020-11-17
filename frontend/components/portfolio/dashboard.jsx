import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar'
import PortfolioIndex from './portfolio_index_container'
import PortfolioInfo from './portfolio_info_container'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <PortfolioInfo/>
                {/* <PortfolioPieChart/> */}
                {/* <PortfolioValue/> */}
                <PortfolioIndex />
            </div>
        )
    }
}

export default Dashboard