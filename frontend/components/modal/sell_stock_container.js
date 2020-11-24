import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { removeHolding, fetchHoldings, updateBuyingPower, updateHolding } from '../../actions/portfolio_actions';
import SellStock from './sell_stock';
import { createActivity } from '../../actions/activity_actions'

const mapStateToProps = (state) => {
  return {
      holdings: Object.values(state.entities.holdings),
      user: Object.values(state.entities.users)[0],
  };
};

const mapDispatchToProps = dispatch => {
  return {
      updateHolding: (holdingData) => dispatch(updateHolding(holdingData)),
      fetchHoldings: (pieId) => dispatch(fetchHoldings(pieId)),
      updateBuyingPower: (userData) => dispatch(updateBuyingPower(userData)),
      removeHolding: (holdingId) => dispatch(removeHolding(holdingId)),
      closeModal: () => dispatch(closeModal()),
      createActivity: (activityData) => dispatch(createActivity(activityData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellStock);