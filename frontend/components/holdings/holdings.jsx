import React from "react";
import LoggedInNavBar from "../nav_bar/logged_in_nav_bar_container";
import { NavLink } from "react-router-dom";
import DashboardFooter from "../portfolio/dashboard_footer";

class Holdings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
    };
  }

  componentDidMount() {
    this.props.fetchPortfolios();
    this.props.fetchStocks();
  }

  clickHolding(ticker) {
    let idx =
      this.props.stocks.filter((stock) => stock.ticker === ticker)[0].id - 1;
    this.props.history.push(`/research/stocks/${idx}`);
  }

  render() {
    let holdingsArr = [];
    if (this.props.portfolios.length > 0) {
      this.props.portfolios.forEach((portfolio) => {
        let holdings = portfolio.tickers.map((ticker, idx) => (
          <div
            className="portfolio-index-item"
            key={idx}
            onClick={() => this.clickHolding(ticker)}
          >
            <div className="stock-content">
              <img src={ticker.image !== null ? ticker.image : "https://i.postimg.cc/jjXLsv17/Untitled-design-52.png"} alt="stock logo" className="stock-image"/>
              <div className="stock-name">
                <p>{ticker}</p>
                <p>{portfolio.names[idx]}</p>
              </div>
              <p className="holding-quantity">
                {portfolio.quantity[idx].toFixed(2) + " shares"}
              </p>
              <p className="holding-quantity">
                {"$" +
                  (
                    (portfolio.value * portfolio.holding_percentages[idx]) / portfolio.quantity[idx]).toFixed(2) +
                  " / share"}
              </p>
              <div className="stock-research-price">
                <p>
                  {"$" +
                    (portfolio.value * portfolio.holding_percentages[idx])
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
              </div>
            </div>
          </div>
        ));
        holdingsArr = holdingsArr.concat(holdings);
      });
    } else {
      holdingsArr = (
        <div className="portfolio-index-item">
          <div className="portfolio-name">
            <p>Please buy a stock to see holdings.</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <LoggedInNavBar />
        <div className="research-nav-bar">
          <div className="research-nav-container">
            <NavLink
              exact
              to="/dashboard"
              activeclass="active"
              className="research-nav-content"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/dashboard/activity"
              activeclass="active"
              className="research-nav-content"
            >
              Activity
            </NavLink>
            <NavLink
              to="/dashboard/holdings"
              activeclass="active"
              className="research-nav-content"
            >
              Holdings
            </NavLink>
          </div>
        </div>
        <div className="research-index-container">
          <div className="portfolio-index-header">
            <p className="header-name">Holdings</p>
          </div>
          {holdingsArr}
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default Holdings;
