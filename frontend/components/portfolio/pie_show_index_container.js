import {connect} from 'react-redux'
import PortfolioPieIndex from './portfolio_pie_index'
import {fetchHoldings} from '../../actions/portfolio_actions'
import {fetchStockPrice, removeHolding} from '../../actions/portfolio_actions'



const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.holdings),
        prices: state.entities.prices,
        type: "Stock Index"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (pieId) => dispatch(fetchHoldings(pieId)),
        fetchStockPrice: (ticker) => dispatch(fetchStockPrice(ticker)),
        removeHolding: () => dispatch(removeHolding())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPieIndex)