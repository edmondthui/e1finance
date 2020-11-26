import { connect } from "react-redux";
import PortfolioPieInfo from "./portfolio_pie_info";
import { fetchPies, fetchPortfolios } from "../../actions/portfolio_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state.entities.holdings),
    user: Object.values(state.entities.users)[0],
    pie: state.entities.pies[ownProps.match.params.pieId],
    portfolio: state.entities.portfolios[ownProps.match.params.portfolioId],
    type: "Pie Show",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPies: (portfolioId) => dispatch(fetchPies(portfolioId)),
    fetchPortfolios: () => dispatch(fetchPortfolios()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPieInfo);
