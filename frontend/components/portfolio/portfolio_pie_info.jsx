import React from 'react'
import { withRouter } from 'react-router-dom'

class PortfolioPieInfo extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {
        // this.props.fetchPortfolios();
        this.props.fetchPies(this.props.match.params.portfolioId)
        // this.props.fetchHoldings(this.props.pie.id)
    }

    render() {
        let totalValue = 0
        let title;
        if (this.props.pie) {
            title = this.props.pie.pie_name.toUpperCase() 
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

export default withRouter(PortfolioPieInfo)