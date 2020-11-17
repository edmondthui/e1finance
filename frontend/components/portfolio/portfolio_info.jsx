import React from 'react'

class PortfolioInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPortfolios()
    }

    render() {
        return (
            <div className="portfolio-info-container">
                {this.props.portfolios.map((portfolio) => (
                    <div className="portfolio-info" key={portfolio.id}>
                        <h1 className="portfolio-info-name">{portfolio.portfolio_name.toUpperCase()}</h1>
                        <div className="values">
                            <p className="current-value-title">Current value</p>
                            <p className="current-value">{"$" + portfolio.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        </div>
                    </div>
                ))}

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

export default PortfolioInfo