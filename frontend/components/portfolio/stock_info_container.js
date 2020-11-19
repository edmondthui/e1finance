import {connect} from 'react-redux'
import StockInfo from './stock_info'
import {fetchHolding, fetchPies} from '../../actions/portfolio_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        stock: state.entities.holdings[ownProps.match.params.stockId],
        pie: state.entities.pies[ownProps.match.params.pieId],
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHolding: (holdingId) => dispatch(fetchHolding(holdingId)),
        fetchPies: () => dispatch(fetchPies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockInfo)