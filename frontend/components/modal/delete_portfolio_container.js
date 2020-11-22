import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePortfolio, fetchPortfolios } from '../../actions/portfolio_actions';
import DeletePortfolio from './delete_portfolio'

const mapStateToProps = (state) => {
    return {
      portfolios: Object.values(state.entities.portfolios)
    };
};

const mapDispatchToProps = dispatch => {
  return {
      deletePortfolio: (portfolioId) => dispatch(deletePortfolio(portfolioId)),
      fetchPortfolios: () => dispatch(fetchPortfolios()),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePortfolio);