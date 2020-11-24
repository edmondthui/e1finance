import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateBuyingPower } from '../../actions/portfolio_actions'
import Deposit from './deposit.jsx'
import { createActivity } from '../../actions/activity_actions'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
    };
};

const mapDispatchToProps = dispatch => {
  return {
      closeModal: () => dispatch(closeModal()),
      updateBuyingPower: (power) => dispatch(updateBuyingPower(power)),
      createActivity: (activityData) => dispatch(createActivity(activityData))
      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);