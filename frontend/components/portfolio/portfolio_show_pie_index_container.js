import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPies} from '../../actions/portfolio_actions'
import {fetchStockPrice, removeHolding} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.pies),
        prices: state.entities.prices,
        type: "Pie Index"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (portfolioId) => dispatch(fetchPies(portfolioId)),
        fetchStockPrice: (ticker) => dispatch(fetchStockPrice(ticker)),
        removeHolding: () => dispatch(removeHolding())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)