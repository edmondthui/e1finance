import { connect } from "react-redux";
import Research from "./research";
import { fetchAllNews } from "../../actions/news_actions";

const mapStateToProps = (state) => {
  return {
    news: state.entities.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNews: () => dispatch(fetchAllNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Research);
