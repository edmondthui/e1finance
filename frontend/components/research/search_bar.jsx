import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    tickers: Object.values(state.entities.stocks).map(stock => stock.ticker)
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default connect(mapStateToProps, null)(SearchBar)