import {connect} from 'react-redux'
import Holdings from './holdings'
import {fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPortfolios: () => dispatch(fetchPortfolios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Holdings)