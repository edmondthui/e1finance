import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk.js';

const configureStore = (preloadedState = {}) => (createStore(rootReducer, preloadedState, applyMiddleware(thunk)));

export default configureStore