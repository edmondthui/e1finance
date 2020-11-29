import React from "react";
import { withRouter, Link } from "react-router-dom";
import { fetchCompanyInfo, fetchCompanyInfo2 } from "../../util/IEX_api_util";
import ResearchChart from "./research_chart_container";

let news = null;
let info = null;
let stockPrice;

class StockShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    };
    this.chart;
    this.info;
  }

  componentDidMount() {
    this.props.fetchStocks()
    setTimeout(() => {
      fetchCompanyInfo(this.props.stock.ticker)
      .then(response => {
        this.info = response
      }).then(() => {
        this.props.fetchStockNews(this.props.stock.ticker);
        this.setState({ render: true });
      })
      fetchCompanyInfo2(this.props.stock.ticker).then(response => {
        this.props.updateStock({name: response.name, id: this.props.stock.id, price: this.props.stock.value, image: response.logo});
      })
    }, 1500);
  }

  clickNews(idx) {
    window.location.href = this.props.news[idx].url;
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    if (this.state.render) {
      news = this.props.news.map((article, idx) => (
        <div
          className="portfolio-index-item"
          key={idx}
          onClick={() => this.clickNews(idx)}
        >
          <div className="news-text-content">
            <p className="news-title">
              {article.headline.length > 80
                ? article.headline.slice(0, 80) + "..."
                : article.headline}
            </p>
            <p className="news-summary">
              {article.summary.slice(0, 80) + "..."}
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
      stockPrice = (
        <h2 className="stock-index-price">
          {"$" +
            (this.props.stock.value ? this.props.stock.value : 0)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </h2>
      );

      info = (
        <div className="stock-show-profile">
          <Link
            to="/research/stocks"
            id="portfolio-back"
            onClick={() => this.goBack()}
          >
            ⬅ BACK
          </Link>
          <h1>{this.props.stock.stock_name}</h1>
          {stockPrice}
          <p>{this.info.description}</p>
          <a href={this.info.website}>Visit website</a>
          <div className="stock-show-small">
            <div>
              <p>CEO</p>
              <p>{this.info.CEO}</p>
            </div>
            <div>
              <p>Employees</p>
              <p>{this.info.employees}</p>
            </div>
            <div>
              <p>Market</p>
              <p>{this.info.exchange}</p>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.stock) {
      this.chart = (
        <ResearchChart
          tickers={this.props.stock.ticker}
          id={this.props.stock.id}
        />
      );
    }
    return (
      <div>
        <div className="stock-show-graph-container">{this.chart}</div>
        <div className="stock-show-container">
          <div className="stock-show-profile-container">{info}</div>
          <div className="stock-show-news-container">
            <div className="portfolio-index-header">
              <p className="header-name">Latest stock news</p>
            </div>
            {news}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StockShowPage);
