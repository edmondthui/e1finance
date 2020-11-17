import {connect} from 'react-redux'
import PortfolioInfo from './portfolio_info'
import {fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        portfolios: Object.values(state.entities.portfolios),
        user: Object.values(state.entities.users)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPortfolios: () => dispatch(fetchPortfolios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioInfo)