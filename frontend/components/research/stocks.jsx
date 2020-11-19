import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import { NavLink, withRouter } from 'react-router-dom';

class Stocks extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStocks()
    }

    clickStock(idx) {
        this.props.history.push(`/research/stocks/${idx}`)
    }

    render() {
        let stocks
        if (this.props.stocks) {
            stocks = this.props.stocks.map((stock, idx )=> (
                <div className="portfolio-index-item" key={idx} onClick={() => this.clickStock(idx)}>
                    <div className = "stock-content">
                        <div>Image</div>
                        <div className = "stock-name">
                            <p>{stock.ticker}</p>
                            <p>{stock.stock_name}</p>
                        </div>
                        <div className = "stock-research-price">
                            <p>{"$" + stock.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        </div>
                    </div>       
                </div>
            ))
        }
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink exact to="/research" activeclass="active" className="research-nav-content">Market News</NavLink>
                        <NavLink to="/research/stocks" activeclass="active" className="research-nav-content">Stocks</NavLink>
                    </div>
                </div>
                <div className="research-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">Stocks</p>
                    </div>
                    {stocks}
                </div>
            </div>
        )
    }
}

export default withRouter(Stocks)