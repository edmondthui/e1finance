import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    tickers: Object.values(state.entities.stocks).map(stock => stock.ticker)
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tickers: []
    }
  }

  update(field) {
    return e => {

    }
  }

  render() {
    return(
      <div>
        <form>
          <input className="add-stock-input" type="text" onChange={this.update("search")} />
          <input type="submit" className="add-stock-submit"/>
        </form>

        {this.state.tickers.length > 0 ? this.state.tickers.map(tickers => (
          <div>
            <Link to={`/research/stocks/${tickers}`}></Link>
          </div>
        )) : ""}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(SearchBar)