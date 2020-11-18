import {connect} from 'react-redux'
import PortfolioPieIndex from './portfolio_pie_index'
import {fetchHoldings} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.holdings),
        type: "Stock Index"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (pieId) => dispatch(fetchHoldings(pieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPieIndex)