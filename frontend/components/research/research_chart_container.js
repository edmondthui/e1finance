import {connect} from 'react-redux'
import ResearchChart from './research_chart'
import {fetchStocks, updateStock} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        stocks: Object.values(state.entities.stocks),
        user: Object.values(state.entities.users)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStocks: () => dispatch(fetchStocks()),
        updateStock: (stockData) => dispatch(updateStock(stockData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResearchChart)