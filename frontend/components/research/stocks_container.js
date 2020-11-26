import { connect } from "react-redux";
import Stocks from "./stocks";
import { fetchStocks, createStock } from "../../actions/portfolio_actions";

const mapStateToProps = (state) => {
  return {
    stocks: Object.values(state.entities.stocks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStocks: () => dispatch(fetchStocks()),
    createStock: (stockData) => dispatch(createStock(stockData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
