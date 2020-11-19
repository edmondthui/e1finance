import {connect} from 'react-redux'
import Stocks from './stocks'
import {fetchStocks} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        stocks: Object.values(state.entities.stocks)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
        // Will need to fetch all stocks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stocks)