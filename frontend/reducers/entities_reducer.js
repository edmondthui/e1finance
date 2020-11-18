import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import portfoliosReducer from './portfolios_reducer'
import piesReducer from './pies_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  portfolios: portfoliosReducer,
  pies: piesReducer
});

export default entitiesReducer;