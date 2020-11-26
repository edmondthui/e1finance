import {
  RECEIVE_HOLDINGS,
  RECEIVE_HOLDING,
  REMOVE_HOLDING,
  CREATE_HOLDING,
  UPDATE_HOLDING,
} from "../actions/portfolio_actions";

const holdingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_HOLDINGS:
      newState = Object.assign({}, state, action.holdings);
      return action.holdings;
    case RECEIVE_HOLDING:
      newState[Object.values(action.holding)[0].id] = Object.values(
        action.holding
      )[0];
      return newState;
    case CREATE_HOLDING:
      newState[Object.values(action.holding)[0].id] = Object.values(
        action.holding
      )[0];
      return newState;
    case UPDATE_HOLDING:
      newState[Object.values(action.holding)[0].id] = Object.values(
        action.holding
      )[0];
      return newState;
    case REMOVE_HOLDING:
      delete newState[Object.values(action.holding)[0].id];
      return newState;
    default:
      return state;
  }
};

export default holdingsReducer;
