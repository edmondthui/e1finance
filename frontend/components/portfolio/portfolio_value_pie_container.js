import { connect } from "react-redux";
import PieChart from "./pie";
import { fetchPortfolios } from "../../actions/portfolio_actions";

const mapStateToProps = (state) => {
  return {
    portfolios: Object.values(state.entities.portfolios),
    user: Object.values(state.entities.users)[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: () => dispatch(fetchPortfolios()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
