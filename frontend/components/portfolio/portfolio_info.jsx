import React from 'react'
import { withRouter, Link } from 'react-router-dom'


class PortfolioInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        let paramsId = this.props.match.params.portfolioId ? this.props.match.params.portfolioId : null
        this.props.action(paramsId);
        this.props.fetchPortfolios();
    }

    render() {
        let totalValue = 0
        let title;
        let link;
        if (this.props.portfolio) {
            title = this.props.portfolio.portfolio_name.toUpperCase()
            link = <Link to={`/dashboard`} id="portfolio-back">⬅ TOTAL PORTFOLIO VALUE</Link>
        }
        else {
            title = "TOTAL PORTFOLIO VALUE"
        }

        return (
            <div className="portfolio-info-container">
                {this.props.items.forEach((item) => (
                    totalValue += item.value
                ))}

                <div className="portfolio-info" >
                    {link}
                    <h1 className="portfolio-info-name">{title}</h1>
                    <div className="values">
                        <p className="current-value-title">Current value</p>
                        <p className="current-value">{"$" + totalValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
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

export default withRouter(PortfolioInfo)