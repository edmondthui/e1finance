import {connect} from 'react-redux'
import Chart from './chart'
import {fetchPies, fetchPortfolios} from '../../actions/portfolio_actions'
import { fetchInterdayData } from '../../util/IEX_api_util';


const mapStateToProps = (state, ownProps) => {
    debugger;
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)