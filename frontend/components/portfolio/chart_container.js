import {connect} from 'react-redux'
import Chart from './chart'
import {fetchPies, fetchPortfolios} from '../../actions/portfolio_actions'


const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)