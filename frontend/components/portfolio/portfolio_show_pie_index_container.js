import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPies} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.pies),
        type: "Pie Index"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (portfolioId) => dispatch(fetchPies(portfolioId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)