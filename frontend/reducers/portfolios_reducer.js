import {
  RECEIVE_PORTFOLIOS,
  RECEIVE_PORTFOLIO,
  CREATE_PORTFOLIO,
  DELETE_PORTFOLIO,
} from "../actions/portfolio_actions";

const portfoliosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PORTFOLIOS:
      return action.portfolios;
    case RECEIVE_PORTFOLIO:
      newState[Object.values(action.portfolio)[0].id] = Object.values(
        action.portfolio
      )[0];
      return newState;
    case CREATE_PORTFOLIO:
      newState[Object.values(action.portfolio)[0].id] = Object.values(
        action.portfolio
      )[0];
      return newState;
    case DELETE_PORTFOLIO:
      delete newState[Object.values(action.portfolio)[0].id];
      return newState;
    default:
      return state;
  }
};

export default portfoliosReducer;
