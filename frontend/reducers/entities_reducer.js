import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import portfoliosReducer from './portfolios_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  portfolios: portfoliosReducer
});

export default entitiesReducer;