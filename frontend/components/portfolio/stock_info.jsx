import React from "react";
import { withRouter } from "react-router-dom";

class StockInfo extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchHolding(this.props.match.params.stockId);
  }

  goBack() {
    this.props.history.push("/dashboard");
  }

  render() {
    let stockValue = 0;
    let stockName = "Stock";
    let button;
    if (this.props.stock) {
      stockValue = this.props.stock.value;
      stockName = this.props.stock.stock_name;
    }
    if (this.props.pie) {
      button = this.props.pie.pie_name.toUpperCase();
    }
    return (
      <div className="portfolio-info-container">
        <div className="portfolio-info">
          <div id="portfolio-back" onClick={() => this.goBack()}>
            ⬅ BACK
          </div>
          <h1 className="portfolio-info-name">{stockName}</h1>
          <div className="values">
            <p className="current-value-title">Current value</p>
            <p className="current-value">
              {"$" + stockValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </p>
          </div>
        </div>

        <div className="deposit-container">
          <div className="buying-power-container">
            <div className="buying-power">
              <p className="cash-balance">Cash balance</p>
              <p className="cash-balance-number">
                {"$" +
                  this.props.user.buying_power
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </p>
            </div>
            <div className="deposit-button-container">
              <button
                className="deposit-button"
                onClick={() => this.props.openModal("deposit")}
              >
                Deposit
              </button>
            </div>
          </div>
          <div className="auto-invest-container">
            <button
              className="withdraw-button"
              onClick={() => this.props.openModal("withdraw")}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StockInfo);
