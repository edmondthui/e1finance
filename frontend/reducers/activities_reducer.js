import {
  RECEIVE_ACTIVITIES,
  RECEIVE_ACTIVITY,
} from "../actions/activity_actions";

const activitiesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ACTIVITIES:
      return action.activities;
    case RECEIVE_ACTIVITY:
      newState[Object.values(action.activity)[0].id] = Object.values(
        action.activity
      )[0];
      return newState;
    default:
      return state;
  }
};

export default activitiesReducer;
