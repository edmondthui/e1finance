import { RECEIVE_STOCKS, RECEIVE_STOCK, UPDATE_STOCK } from '../actions/portfolio_actions'

const stocksReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STOCKS:
            return action.stocks
        case RECEIVE_STOCK:
            newState = action.stock
            return newState
        case UPDATE_STOCK:
            newState[Object.values(action.stock)[0].id] = Object.values(action.stock)[0]
            return newState
        default:
            return state;
    }
}

export default stocksReducer