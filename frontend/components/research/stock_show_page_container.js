import {connect} from 'react-redux'
import StockShowPage from './stock_show_page'
import {fetchCompanyInfo, fetchStockNews} from '../../actions/news_actions'
import { fetchStock } from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    debugger;
    return {
        stock: Object.values(state.entities.stocks)[0],
        info: state.entities.info,
        news: state.entities.news,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStock: (stockId) => dispatch(fetchStock(stockId)),
        fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker)),
        fetchStockNews: (ticker) => dispatch(fetchStockNews(ticker)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShowPage)