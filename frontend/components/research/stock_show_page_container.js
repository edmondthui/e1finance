import {connect} from 'react-redux'
import StockShowPage from './stock_show_page'
import {fetchCompanyInfo, fetchStockNews} from '../../actions/news_actions'
import { fetchHolding } from '../../actions/portfolio_actions'


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        stock: state.entities.holdings[ownProps.match.params.stockId],
        info: state.entities.info,
        news: state.entities.news,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHolding: (holdingId) => dispatch(fetchHolding(holdingId)),
        fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker)),
        fetchStockNews: (ticker) => dispatch(fetchStockNews(ticker))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShowPage)