import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deletePie, fetchPies } from "../../actions/portfolio_actions";
import DeletePie from "./delete_pie";

const mapStateToProps = (state) => {
  return {
    pies: Object.values(state.entities.pies),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePie: (portfolioId) => dispatch(deletePie(portfolioId)),
    fetchPies: (portfolioId) => dispatch(fetchPies(portfolioId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePie);
