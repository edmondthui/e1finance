import {connect} from 'react-redux'
import StockIndex from './stock_info'
import {fetchHolding} from '../../actions/portfolio_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        stock: state.entities.holdings[ownProps.match.params.stockId],
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHolding: (holdingId) => dispatch(fetchHolding(holdingId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex)