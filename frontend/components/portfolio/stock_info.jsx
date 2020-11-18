import React from 'react'
import { withRouter } from 'react-router-dom'

class StockInfo extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {
        this.props.fetchHolding(this.props.match.params.stockId)
    }

    render() {
        let stockValue = 0;
        let stockName = "Stock"
        if (this.props.stock) {
            stockValue = this.props.stock.value
            stockName = this.props.stock.stock_name
        }
        return (
            <div className="portfolio-info-container">
                <div className="portfolio-info" >
                    <h1 className="portfolio-info-name">{stockName}</h1>
                    <div className="values">
                        <p className="current-value-title">Current value</p>
                        <p className="current-value">{"$" + stockValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    </div>
                </div>

                <div className="deposit-container">
                    <div className="buying-power-container">
                        <div className="buying-power">
                            <p className="cash-balance">Cash balance</p>
                            <p className="cash-balance-number">{"$" + this.props.user.buying_power.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        </div>
                        <div className="deposit-button">
                            <p>Deposit</p>
                        </div>
                    </div>
                    <div className="auto-invest-container">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(StockInfo)