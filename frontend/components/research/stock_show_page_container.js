import { connect } from "react-redux";
import StockShowPage from "./stock_show_page";
import { fetchCompanyInfo, fetchStockNews } from "../../actions/news_actions";
import { fetchStock, fetchStocks, updateStock } from "../../actions/portfolio_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    stock: Object.values(state.entities.stocks)[ownProps.match.params.stockId],
    info: state.entities.info,
    news: state.entities.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStock: (stockId) => dispatch(fetchStock(stockId)),
    fetchCompanyInfo: (ticker) => dispatch(fetchCompanyInfo(ticker)),
    fetchStockNews: (ticker) => dispatch(fetchStockNews(ticker)),
    fetchStocks: () => dispatch(fetchStocks()),
    updateStock: (stockData) => dispatch(updateStock(stockData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockShowPage);
