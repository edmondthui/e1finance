import React from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'


let formattedChart = []

class PortfolioIndex extends React.Component {
    constructor(props) {
        super(props)
        this.chart = [];
    }

    componentDidMount() {
        this.props.action(this.props.match.params.portfolioId)
    }

    handleClick(itemId) {
        this.props.history.push(this.props.match.url+`/${itemId}`);
    }
    
    render() {
        let formattedPortfolio = [];
        let totalValue = 0;
        let tickers = [];
        let quantities = [];

        if (this.props.match.params.portfolioId) {
            this.props.items.forEach(item => {
                formattedChart.push(this.props.prices)
                formattedPortfolio.push({ id: item.id, value: item.value, name: item.pie_name })
                totalValue += item.value
            })
        }
        else {
            this.props.items.forEach(item => {
                formattedChart.push(this.props.prices)
                formattedPortfolio.push({ id: item.id, value: item.value, name: item.portfolio_name })
                totalValue += item.value
            })
        }
        let items = this.props.items.map((item) => (
            <div key={item.id} className="portfolio-index-item" onClick={()=>this.handleClick(item.id)}>
                <div className="portfolio-name">
                <img src="https://i.postimg.cc/ncKSVm8J/pie-image.png" alt="pie-image" height="40" width="40"/>
                <p>{item.portfolio_name ? item.portfolio_name : window.location.reload()}</p>
                </div>
                <p className="item-value">{"$" + (item.value ? item.value : 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
            </div>
        ))
        if (this.props.items.length > 0) {
            this.props.items.forEach(portfolio => {
                tickers = tickers.concat(portfolio.tickers)
                quantities = quantities.concat(portfolio.quantity)      
            })
            this.chart = <PortfolioChart tickers={tickers} quantities={quantities}/> 
        }
        return (
            <div className="portfolio-content-container">
                <div className="portfolio-pie-container">
                    <div className="portfolio-pie">
                        <PortfolioPie items={formattedPortfolio} totalValue={"$" + totalValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} openModal={this.props.openModal}/>
                    </div>
                </div>
                <div className="portfolio-main-content">
                    {this.chart}
                    <h1 className="slice-title">Slices</h1>
                    <div className="portfolio-index-container">
                        <div className="portfolio-index-header">
                            <p className="header-name">Name</p>
                            <p className="header-value">Value</p>
                        </div>
                        {items.length>0 ? items : <div className="portfolio-index-item"><div className="portfolio-name"><p>Please create a portfolio or pie to buy / sell stocks.</p></div></div>}
                        </div>
                    </div>
            </div>
        )
    }
}

export default withRouter(PortfolioIndex)