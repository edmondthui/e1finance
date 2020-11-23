import {connect} from 'react-redux'
import PortfolioInfo from './portfolio_info'
import {fetchPies, fetchPortfolios} from '../../actions/portfolio_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        items: Object.values(state.entities.pies), // change from portfolios to pies
        user: Object.values(state.entities.users)[0],
        portfolio: state.entities.portfolios[ownProps.match.params.portfolioId],
        type: "Portfolio Show"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: (portfolioId) => dispatch(fetchPies(portfolioId)), //change to fetch pies
        fetchPortfolios: () => dispatch(fetchPortfolios()),
        openModal: (modal) => dispatch(openModal(modal)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioInfo)