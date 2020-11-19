import React from 'react'
import { withRouter } from 'react-router-dom'

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
        if(this.state.render) {
            news = this.props.news.map(article => (
                <div className="portfolio-index-item">
                    <div className="news-text-content">
                        <p className="news-title">{article.headline}</p>
                        <p className="news-summary">{article.summary.slice(0, 100)+"..."}</p>
                    </div>
                    <img src={article.image} alt="news-image" className="news-image" height="60" width="60"/>                 
                </div>
            ))
        }
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

                    {news}
                </div>
            </div>
        )
    }
}

export default withRouter(StockNewsIndex)