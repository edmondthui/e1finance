import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'



class PortfolioPieIndex extends React.Component {
    constructor(props) {
        super(props)
        this.chart = [];
    }

    componentDidMount() {
        this.props.items.forEach(item => {
            this.props.fetchStockPrice(item.ticker)
        })
        this.props.action(this.props.match.params.pieId)
        this.props.fetchPies(this.props.match.params.portfolioId)
    }

    handleClick(itemId) {
        this.props.history.push(this.props.match.url+`/${itemId}`);
    }

    render() {
        let formattedPie = [];
        let totalValue = 0
        let holdings = [];
        let quantities = [];
        let tickers = [];
        if (this.props.items.length > 0) {
            this.props.items.forEach(item => {
                formattedPie.push({ id: item.id, value: item.value, name: item.stock_name });
                totalValue += item.value
                holdings.push(item)
                quantities.push(item.quantity)
                tickers.push(item.ticker)
            });
            this.chart = <PortfolioChart tickers={tickers} quantities={quantities}/> 
        }
        let value;
        let items = this.props.items.map((item) => (
            <div key={item.id} className="portfolio-index-item" onClick={()=>this.handleClick(item.id)}>
                <div className="portfolio-name">
                <img src="https://i.postimg.cc/ncKSVm8J/pie-image.png" alt="pie-image" height="40" width="40"/>
                <p>{item.stock_name}</p>
                </div>
                <div style={{display: 'none' }}>{value = item.value ? item.value : window.location.reload()}</div>
                <p className="item-value">{"$" + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                <p className="item-value">{item.quantity ? item.quantity.toFixed(2) : null }</p>
            </div>
        ))
        return (
            <div className="portfolio-content-container">
                <div className="portfolio-pie-container">
                    <div className="portfolio-pie">
                        <PortfolioPie items={formattedPie} totalValue={"$" + totalValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} openModal={this.props.openModal}/>
                    </div>
                </div>
                <div className="portfolio-main-content">
                    {this.chart}
                    {/* <PortfolioChart tickers={tickers} quantities={quantities}/>  */}
                    <h1 className="slice-title">Markets</h1>
                    <div className="portfolio-index-container">
                        <div className="portfolio-index-header">
                            <p className="header-name">Name</p>
                            <p className="header-value">Value</p>
                            <p className="header-value">Quantity</p>
                        </div>

                        {items.length>0 ? items : <div className="portfolio-index-item"><div className="portfolio-name"><p>Please buy stocks to populate your pie.</p></div></div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PortfolioPieIndex)