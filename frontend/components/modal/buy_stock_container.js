import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createHolding, fetchStocks } from '../../actions/portfolio_actions';
import BuyStock from './buy_stock'

const mapStateToProps = (state) => {
  return {
      user: Object.values(state.entities.users)[0],
      stocks: Object.values(state.entities.stocks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
      createHolding: (holdingData) => dispatch(createHolding(holdingData)),
      fetchStocks: () => dispatch(fetchStocks()),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyStock);