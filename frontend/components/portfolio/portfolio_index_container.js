import {connect} from 'react-redux'
import PortfolioIndex from './portfolio_index'
import {fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        portfolios: Object.values(state.entities.portfolios)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPortfolios: () => dispatch(fetchPortfolios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex)