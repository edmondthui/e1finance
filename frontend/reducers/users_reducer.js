import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { UPDATE_BUYING_POWER } from "../actions/portfolio_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    case UPDATE_BUYING_POWER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
