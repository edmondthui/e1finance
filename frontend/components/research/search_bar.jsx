import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    // tickers: Object.values(state.entities.stocks).map(stock => stock.ticker),
    stocks: Object.values(state.entities.stocks)
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stocks: []
    }
  }

  update(field) {
    return e => {
      let stocks = [];
      if (e.currentTarget.value !== "") {
        stocks = this.props.stocks.filter(x=> x.ticker.toUpperCase().includes(e.currentTarget.value.toUpperCase()) || x.stock_name.toUpperCase().includes(e.currentTarget.value.toUpperCase()))
      }
      stocks = stocks.slice(0, 5);
      this.setState({[field]: stocks})
    }
  }

  render() {
    return(
      <div className="search-container">
        <form>
          <input className="add-stock-input" type="text" onChange={this.update("stocks")} />
          <input type="submit" className="add-stock-submit"/>
        </form>

        <div className="search-box">
          {this.state.stocks ? this.state.stocks.map(stock => (
              <Link to={`/research/stocks/${stock.id-1}`} className="search-item">{stock.ticker} {stock.stock_name}</Link>
              )) : ""}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(SearchBar)