import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createHolding, fetchStocks, updateBuyingPower, updateHolding, fetchHoldings } from '../../actions/portfolio_actions';
import BuyStock from './buy_stock'
import { createActivity } from '../../actions/activity_actions'

const mapStateToProps = (state) => {
  return {
      user: Object.values(state.entities.users)[0],
      stocks: Object.values(state.entities.stocks),
      holdings: Object.values(state.entities.holdings)
  };
};

const mapDispatchToProps = dispatch => {
  return {
      createHolding: (holdingData) => dispatch(createHolding(holdingData)),
      fetchStocks: () => dispatch(fetchStocks()),
      updateBuyingPower: (userData) => dispatch(updateBuyingPower(userData)),
      closeModal: () => dispatch(closeModal()),
      updateHolding: (holdingData) => dispatch(updateHolding(holdingData)),
      fetchHoldings: (pieId) => dispatch(fetchHoldings(pieId)),
      createActivity: (activityData) => dispatch(createActivity(activityData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyStock);