import {connect} from 'react-redux'
import Stocks from './stocks'
import {fetchAllNews} from '../../actions/news_actions'


const mapStateToProps = (state) => {
    return {
        news: state.entities.news,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllNews: () => dispatch(fetchAllNews())
        // Will need to fetch all stocks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stocks)