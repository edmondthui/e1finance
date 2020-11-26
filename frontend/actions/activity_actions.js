import * as PortfolioAPIUtil from "../util/portfolio_api_util";

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";

const receiveActivities = (activities) => {
  return {
    type: RECEIVE_ACTIVITIES,
    activities,
  };
};

const receiveActivity = (activity) => {
  return {
    type: RECEIVE_ACTIVITY,
    activity,
  };
};

export const fetchActivities = () => {
  return (dispatch) => {
    PortfolioAPIUtil.getActivities().then((activities) =>
      dispatch(receiveActivities(activities))
    );
  };
};

export const createActivity = (activityData) => {
  return (dispatch) => {
    PortfolioAPIUtil.createActivity(activityData).then((activity) =>
      dispatch(receiveActivity(activity))
    );
  };
};
