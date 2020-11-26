import React from "react";
import LoggedInNavBar from "../nav_bar/logged_in_nav_bar_container";
import { NavLink, withRouter } from "react-router-dom";
import DashboardFooter from "../portfolio/dashboard_footer";

class Stocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 5
    }
    this.loadMore = this.loadMore.bind(this)
    this.addStock = this.addStock.bind(this)
  }

  componentDidMount() {
    this.props.fetchStocks();
  }

  addStock() {

  }

  clickStock(idx) {
    this.props.history.push(`/research/stocks/${idx}`);
  }

  loadMore() {
    this.setState({
      visible: this.state.visible + 4
    })
  }

  render() {
    let stocks;
    let showMore;
    if (this.props.stocks) {
      stocks = this.props.stocks.reverse().slice(0, this.state.visible).map((stock, idx) => (
        <div
          className="portfolio-index-item fadeIn"
          key={idx}
          onClick={() => this.clickStock(idx)}
        >
          <div className="stock-content">
            <div className="image-placeholder">Image</div>
            <div className="stock-name">
              <p>{stock.ticker}</p>
              <p>{stock.stock_name}</p>
            </div>
            <div className="stock-research-price">
              <p>
                {"$" +
                  stock.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
                  " / share"}
              </p>
            </div>
          </div>
        </div>
      ));
    }
    if (this.state.visible < this.props.stocks.length) {
      showMore = <button onClick={this.loadMore} className="show-more">Load more</button>
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
          <div className= "add-stock-ticker">
            <form onSubmit={this.addStock}>
              <input type="text" placeholder="TICKER" className="add-stock-input"/>
              <input type="submit" value="Add stock" className="add-stock-submit"/>
            </form>
          </div>
        </div>
        <div className="research-index-container">
          <div className="portfolio-index-header">
            <p className="header-name">Stocks</p>
          </div>
          {stocks}
          <div className= "show-more-container">
            {showMore}
          </div>
        </div>
        <DashboardFooter />
      </div>
    );
  }
}

export default withRouter(Stocks);
