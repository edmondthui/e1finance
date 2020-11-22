import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import { createPie } from '../../actions/portfolio_actions';
import CreatePie from './create_pie'

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //   createPie: (pieData) => dispatch(createPie(pieData)),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePie);