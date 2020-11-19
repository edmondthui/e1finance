import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import portfoliosReducer from './portfolios_reducer'
import piesReducer from './pies_reducer'
import holdingsReducer from './holdings_reducer'
import newsReducer from './news_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  portfolios: portfoliosReducer,
  pies: piesReducer,
  holdings: holdingsReducer,
  news: newsReducer
});

export default entitiesReducer;