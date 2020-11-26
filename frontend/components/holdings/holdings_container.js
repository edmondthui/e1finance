import { connect } from "react-redux";
import Holdings from "./holdings";
import { fetchPortfolios, fetchStocks } from "../../actions/portfolio_actions";

const mapStateToProps = (state) => {
  return {
    portfolios: Object.values(state.entities.portfolios),
    stocks: Object.values(state.entities.stocks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolios: () => dispatch(fetchPortfolios()),
    fetchStocks: () => dispatch(fetchStocks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Holdings);
