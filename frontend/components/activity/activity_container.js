import {connect} from 'react-redux'
import Activity from './activity'
import {fetchActivities} from '../../actions/activity_actions'


const mapStateToProps = (state) => {
    debugger;
    return {
        activities: Object.values(state.entities.activities)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivities: () => dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)