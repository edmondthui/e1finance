import {connect} from 'react-redux'
import Activity from './activity'
// import {fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchPortfolios: () => dispatch(fetchPortfolios())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)