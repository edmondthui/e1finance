import { RECEIVE_STOCKS } from '../actions/portfolio_actions'

const stocksReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STOCKS:
            return action.stocks
        default:
            return state;
    }
}

export default stocksReducer