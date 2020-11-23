import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import { NavLink } from 'react-router-dom';
import DashboardFooter from '../portfolio/dashboard_footer'

class Holdings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
        }
    }

    componentDidMount() {
        this.props.fetchPortfolios()
        this.props.fetchStocks()
    }

    clickHolding(ticker) {
        let idx = this.props.stocks.filter(stock => stock.ticker === ticker)[0].id - 1
        debugger;
        this.props.history.push(`/research/stocks/${idx}`)
    }

    render() {
        let holdingsArr = [];
        // tickers.push(ticker)
        // quantity.push(portfolio.quantity[idx])
        // value.push(portfolio.value*portfolio.holding_percentages[idx]/portfolio.quantity[idx])
        if (this.props.portfolios.length > 0) {
            this.props.portfolios.forEach((portfolio) => {
                let holdings = portfolio.tickers.map((ticker,idx) => (
                    <div className="portfolio-index-item" key={idx} onClick={() => this.clickHolding(ticker)}>
                        <div className = "stock-content">
                            <div>Image</div>
                            <div className = "stock-name">
                                <p>{ticker}</p>
                                <p>{portfolio.names[idx]}</p>
                            </div>
                            <p className = "holding-quantity">{portfolio.quantity[idx].toFixed(2) + " shares"}</p>
                            <p className = "holding-quantity">{"$" + (portfolio.value*portfolio.holding_percentages[idx] / portfolio.quantity[idx]).toFixed(2) + " per share"}</p>
                            <div className = "stock-research-price">
                                <p>{"$" + (portfolio.value*portfolio.holding_percentages[idx]).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>
                        </div>  
                    </div>
                ))
                holdingsArr = holdingsArr.concat(holdings)
            })
        }
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink exact to="/dashboard" activeclass="active" className="research-nav-content">Portfolio</NavLink>
                        <NavLink to="/dashboard/activity" activeclass="active" className="research-nav-content">Activity</NavLink>
                        <NavLink to="/dashboard/holdings" activeclass="active" className="research-nav-content">Holdings</NavLink>
                    </div>
                </div>
                <div className="research-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">Holdings</p>
                    </div>
                    {holdingsArr}
                </div>
                <DashboardFooter/>
            </div>
        )
    }
}

export default Holdings