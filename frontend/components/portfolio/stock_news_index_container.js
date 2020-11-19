import {connect} from 'react-redux'
import StockNewsIndex from './stock_news_index'
import { fetchHolding } from '../../actions/portfolio_actions'
import {fetchStockNews} from '../../actions/news_actions'


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        stock: state.entities.holdings[ownProps.match.params.stockId],
        news: state.entities.news,
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHolding: (holdingId) => dispatch(fetchHolding(holdingId)),
        fetchStockNews: (ticker) => dispatch(fetchStockNews(ticker))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockNewsIndex)