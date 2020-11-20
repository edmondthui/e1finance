import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPortfolios, fetchStockPrice} from '../../actions/portfolio_actions'


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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)