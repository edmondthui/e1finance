import { RECEIVE_STOCK_NEWS, RECEIVE_ALL_NEWS } from "../actions/news_actions";

const newsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_STOCK_NEWS:
      return action.news;
    case RECEIVE_ALL_NEWS:
      return action.news;
    default:
      return state;
  }
};

export default newsReducer;
