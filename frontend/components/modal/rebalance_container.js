import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { removeHolding, fetchHoldings, updateBuyingPower, updateHolding, fetchPies } from '../../actions/portfolio_actions';
import Rebalance from './rebalance';
import { createActivity } from '../../actions/activity_actions'

const mapStateToProps = (state, ownProps) => {
  return {
      holdings: Object.values(state.entities.holdings),
      user: Object.values(state.entities.users)[0],
      pie: state.entities.pies[ownProps.match.params.pieId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
      updateHolding: (holdingData) => dispatch(updateHolding(holdingData)),
      fetchHoldings: (pieId) => dispatch(fetchHoldings(pieId)),
      updateBuyingPower: (userData) => dispatch(updateBuyingPower(userData)),
      removeHolding: (holdingId) => dispatch(removeHolding(holdingId)),
      closeModal: () => dispatch(closeModal()),
      createActivity: (activityData) => dispatch(createActivity(activityData)),
      fetchPies: (portfolioId) => dispatch(fetchPies(portfolioId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rebalance);