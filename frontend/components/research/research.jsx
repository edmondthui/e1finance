import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import { NavLink } from 'react-router-dom';

class Research extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
        }
        this.clickNews = this.clickNews.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchAllNews();
            this.setState({render: true}) 
        }, 1000)
    }

    clickNews(idx) {
        // window.location.assign(this.props.news[idx].url)
        window.location.href = this.props.news[idx].url
    }

    render() {
        let news;
        if(this.state.render) {
            news = this.props.news.map((article, idx )=> (
                <div className="portfolio-index-item" key={idx} onClick={() => this.clickNews(idx)}>
                    <div className="news-text-content" >
                        <p className="news-title">{(article.headline.length > 120) ? article.headline.slice(0, 150)+"..." : article.headline}</p>
                        <p className="news-summary">{article.summary.slice(0, 150)+"..."}</p>
                    </div>
                    <img src={article.image} alt="news-image" className="news-image" height="60" width="60"/>                 
                </div>
            ))
        }
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink to="/research" activeclass="active" className="research-nav-content">Market News</NavLink>
                        <NavLink to="/stocks" activeclass="active" className="research-nav-content">Stocks</NavLink>
                    </div>
                </div>
                <div className="research-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">{"Latest market news"}</p>
                    </div>
                    {news}
                </div>
            </div>
        )
    }
}

export default Research