import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { createStock } from "../../actions/portfolio_actions";

const mapStateToProps = (state) => {
  return {
    // tickers: Object.values(state.entities.stocks).map(stock => stock.ticker),
    stocks: Object.values(state.entities.stocks)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStock: (stockData) => dispatch(createStock(stockData))
  };
};


class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: [],
      search: ""
    }
    this.addStock = this.addStock.bind(this);
  }

  update(field) {
    return e => {
      if (field === "stocks") {
        let stocks = [];
        if (e.currentTarget.value !== "") {
          stocks = this.props.stocks.filter(x=> x.ticker.toUpperCase().includes(e.currentTarget.value.toUpperCase()) || x.stock_name.toUpperCase().includes(e.currentTarget.value.toUpperCase()))
        }
        stocks = stocks.slice(0, 5);
        this.setState({[field]: stocks, search: e.currentTarget.value.toUpperCase()})
      }
    }
  }

  addStock(e) {
    e.preventDefault();
    let newStock = this.props.stocks.filter(stock => stock.ticker === this.state.search)
    if (newStock.length === 0) {
      this.props.createStock({ ticker: this.state.search })
      this.props.history.push(`/research/stocks/${this.props.stocks.length}`)
    }
    else {
      this.props.history.push(`/research/stocks/${newStock[0].id-1}`)
    }
  }

  render() {
    return(
      <div className="search-container">
        <form onSubmit={this.addStock}>
          <input className="add-stock-input" type="text" onChange={this.update("stocks")}/>
          <input type="submit" className="add-stock-submit"/>
        </form>

        <div className="search-box">
          {this.state.stocks ? this.state.stocks.map(stock => (
              <Link to={`/research/stocks/${stock.id-1}`} className="search-item" key={stock.id}>{stock.ticker} {stock.stock_name}</Link>
              )) : ""}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar))