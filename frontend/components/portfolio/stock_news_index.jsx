import React from 'react'
import { withRouter } from 'react-router-dom'

class StockNewsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoad = this.handleLoad.bind(this)
    }

    componentDidMount() {
        debugger;
        this.props.fetchHolding(this.props.match.params.stockId)
        window.addEventListener('load', this.handleLoad)
    }

    handleLoad() {
        debugger;
        this.props.fetchStockNews(this.props.stock.ticker)
    }
    
    render() {
            debugger;


        return (
            <div>
                <div className="portfolio-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">Price</p>
                        <p className="header-value">Daily Change</p>
                    </div>
                    <div className="portfolio-index-item">
                        <h1>test</h1>                        
                    </div>
                </div>
                <br/>
                <div className="portfolio-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">{"Latest news"}</p>
                    </div>

                    {this.props.news.map(article => (
                        <div className="portfolio-index-item">
                            <div className="news-text-content">
                                <p className="news-title">{article.headline}</p>
                                <p className="news-summary">{article.summary}</p>
                            </div>
                            <img src={article.image} alt="pie-image" height="40" width="40"/>                 
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(StockNewsIndex)