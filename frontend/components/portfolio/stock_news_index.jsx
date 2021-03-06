import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import PortfolioChart from "./portfolio_value_chart_container";
import PortfolioPie from "./portfolio_value_pie_container";

let news = null;

class StockNewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      price: 0,
    };
  }

  componentDidMount() {
    this.props.fetchHoldings(this.props.match.params.pieId);
    setTimeout(() => {
      this.props.fetchStockNews(this.props.stock.ticker);
      this.setState({ render: true });
    }, 500);
  }

  clickNews(idx) {
    window.location.href = this.props.news[idx].url;
  }

  render() {
    let pie;
    let stockPrice;
    if (this.state.render) {
      news = this.props.news.map((article, idx) => (
        <div
          className="portfolio-index-item"
          key={idx}
          onClick={() => this.clickNews(idx)}
        >
          <div className="news-text-content">
            <p className="news-title">
              {article.headline.length > 95
                ? article.headline.slice(0, 95) + "..."
                : article.headline}
            </p>
            <p className="news-summary">
              {article.summary.slice(0, 100) + "..."}
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
      if (this.props.stock) {
        stockPrice = (
          <h1 className="stock-index-price">
            {"$" +
              (this.props.stock.value / this.props.stock.quantity)
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </h1>
        );
        const formattedStock = [
          {
            id: this.props.stock.id,
            value: this.props.stock.value,
            name: this.props.stock.stock_name,
          },
        ];
        pie = (
          <PortfolioPie
            items={formattedStock}
            totalValue={
              "$" +
              this.props.stock.value
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            }
            openModal={this.props.openModal}
          />
        );
      } else {
        this.props.history.push(
          `/dashboard/${this.props.match.params.portfolioId}/${this.props.match.params.pieId}`
        );
      }
    }
    let chart;
    if (this.props.stock) {
      chart = (
        <PortfolioChart
          tickers={this.props.stock.ticker}
          quantities={this.props.stock.quantity}
          id={this.props.stock.stock_id}
        />
      );
    }
    return (
      <div className="portfolio-content-container">
        <div className="portfolio-pie-container">
          <div className="portfolio-pie">{pie}</div>
        </div>
        <div className="portfolio-main-content">
          {chart}
          <h1 className="slice-title">Markets</h1>

          <div>
            <div className="portfolio-index-container">
              <div className="portfolio-index-header">
                <p className="header-name">Price per share</p>
                <p className="header-value"></p>
              </div>
              <div className="portfolio-index-item">{stockPrice}</div>
            </div>
            <br />
            <div className="portfolio-index-container">
              <div className="portfolio-index-header">
                <p className="header-name">Latest news</p>
              </div>
              {news}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StockNewsIndex);
