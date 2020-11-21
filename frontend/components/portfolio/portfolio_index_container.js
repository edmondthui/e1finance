import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPortfolios, fetchStockPrice, removeHolding} from '../../actions/portfolio_actions'
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.portfolios),
        prices: state.entities.prices,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: () => dispatch(fetchPortfolios()),
        fetchStockPrice: (ticker) => dispatch(fetchStockPrice(ticker)),
        openModal: (modal) => dispatch(openModal(modal)),
        removeHolding: () => dispatch(removeHolding())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)