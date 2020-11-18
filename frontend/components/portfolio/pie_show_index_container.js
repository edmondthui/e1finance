import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPies} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.pies),
        type: "Stock Index"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (portfolioId) => dispatch(fetchPies(portfolioId)) // change fetch portfolios to fetch pies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)