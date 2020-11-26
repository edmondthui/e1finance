import React from "react";
import LoggedInNavBar from "../nav_bar/logged_in_nav_bar_container";
import { NavLink } from "react-router-dom";
import DashboardFooter from "../portfolio/dashboard_footer";

class Research extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllNews();
    this.setState({ render: true });
  }

  clickNews(idx) {
    window.location.href = this.props.news[idx].url;
  }

  render() {
    let news;
    if (this.state.render) {
      news = this.props.news.map((article, idx) => (
        <div
          className="portfolio-index-item"
          key={idx}
          onClick={() => this.clickNews(idx)}
        >
          <div className="news-text-content">
            <p className="news-title">
              {article.headline.length > 120
                ? article.headline.slice(0, 150) + "..."
                : article.headline}
            </p>
            <p className="news-summary">
              {article.summary.slice(0, 150) + "..."}
            </p>
          </div>
          <img
            src={article.image}
            alt="news-image"
            className="news-image"
            height="60"
            width="60"
          />
        </div>
      ));
    }
    return (
      <div>
        <LoggedInNavBar />
        <div className="research-nav-bar">
          <div className="research-nav-container">
            <NavLink
              exact
              to="/research"
              activeclass="active"
              className="research-nav-content"
            >
              Market News
            </NavLink>
            <NavLink
              to="/research/stocks"
              activeclass="active"
              className="research-nav-content"
            >
              Stocks
            </NavLink>
          </div>
        </div>
        <div className="research-index-container">
          <div className="portfolio-index-header">
            <p className="header-name">Latest market news</p>
          </div>
          {news}
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default Research;
