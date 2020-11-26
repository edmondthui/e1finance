import { RECEIVE_COMPANY_INFO } from "../actions/news_actions";

const infoReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMPANY_INFO:
      return action.info;
    default:
      return state;
  }
};

export default infoReducer;
