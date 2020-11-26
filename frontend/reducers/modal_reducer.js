import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default uiReducer;
