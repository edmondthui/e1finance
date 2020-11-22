import {connect} from 'react-redux'
import StockNewsIndex from './stock_news_index'
import { fetchHolding } from '../../actions/portfolio_actions'
import {fetchStockNews} from '../../actions/news_actions'
import {fetchStockPrice} from '../../actions/portfolio_actions'
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        stock: state.entities.holdings[ownProps.match.params.stockId],
        news: state.entities.news,
        prices: state.entities.prices,
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHolding: (holdingId) => dispatch(fetchHolding(holdingId)),
        fetchStockNews: (ticker) => dispatch(fetchStockNews(ticker)),
        fetchStockPrice: (ticker) => dispatch(fetchStockPrice(ticker)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsIndex)