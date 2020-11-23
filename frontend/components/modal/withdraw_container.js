import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateBuyingPower } from '../../actions/portfolio_actions'
import Withdraw from './withdraw.jsx'

const mapStateToProps = (state) => {
    return {
        user: Object.values(state.entities.users)[0],
    };
};

const mapDispatchToProps = dispatch => {
  return {
      closeModal: () => dispatch(closeModal()),
      updateBuyingPower: (power) => dispatch(updateBuyingPower(power))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);