import {connect} from 'react-redux'
import PortfolioInfo from './portfolio_info'
import {fetchPortfolios} from '../../actions/portfolio_actions'
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.entities.portfolios),
        user: Object.values(state.entities.users)[0],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: () => dispatch(fetchPortfolios()),
        fetchPortfolios: () => dispatch(fetchPortfolios()),
        openModal: (modal) => dispatch(openModal(modal)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioInfo)