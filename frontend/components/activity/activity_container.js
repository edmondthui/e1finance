import {connect} from 'react-redux'
import Activity from './activity'
import {fetchActivities} from '../../actions/activity_actions'
import {fetchStocks} from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
    return {
        activities: Object.values(state.entities.activities),
        stocks: Object.values(state.entities.stocks)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: () => dispatch(fetchActivities()),
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)