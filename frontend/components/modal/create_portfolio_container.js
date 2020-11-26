import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createPortfolio } from "../../actions/portfolio_actions";
import CreatePortfolio from "./create_portfolio";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPortfolio: (portfolioData) =>
      dispatch(createPortfolio(portfolioData)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePortfolio);
