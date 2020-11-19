import React from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioChart from './portfolio_value_chart_container'
import PortfolioPie from './portfolio_value_pie_container'

class StockNewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false
        }
    }

    componentDidMount() {
        this.props.fetchHolding(this.props.match.params.stockId)
        setTimeout(() => {
            this.props.fetchStockNews(this.props.stock.ticker)
            this.setState({render: true}) 
        }, 100)
    }
    
    render() {
        let news = null
        let pie;
        let stockPrice;
        if(this.state.render) {
            news = this.props.news.map((article,idx) => (
                <div className="portfolio-index-item" key={idx}>
                    <div className="news-text-content">
                        <p className="news-title">{(article.headline.length > 95) ? article.headline.slice(0, 95)+"..." : article.headline}</p>
                        <p className="news-summary">{article.summary.slice(0, 100)+"..."}</p>
                    </div>
                    <img src={article.image} alt="news-image" className="news-image" height="60" width="60"/>                 
                </div>
            ))
            stockPrice = <h1 className="stock-index-price">{"$" + 30.31.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h1>  // TODO FETCH STOCK PRICE
            pie = <PortfolioPie items={[this.props.stock]}/>
        }
        debugger;
        return (
            <div className="portfolio-content-container">
                <div className="portfolio-pie-container">
                    <div className="portfolio-pie">
                        {pie}
                    </div>
                </div>
                <div className="portfolio-main-content">
                    <PortfolioChart/> 
                    <h1 className="slice-title">Markets</h1>


                <div>
                    <div className="portfolio-index-container">
                        <div className="portfolio-index-header">
                            <p className="header-name">Price</p>
                            <p className="header-value"></p>
                        </div>
                        <div className="portfolio-index-item">
                            {stockPrice}                    
                        </div>
                    </div>
                    <br/>
                    <div className="portfolio-index-container">
                        <div className="portfolio-index-header">
                            <p className="header-name">{"Latest news"}</p>
                        </div>
                        {news}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(StockNewsIndex)