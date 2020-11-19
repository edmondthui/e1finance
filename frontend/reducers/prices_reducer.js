import { RECEIVE_STOCK_PRICE } from '../actions/portfolio_actions'

const newsReducer = (state=[], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STOCK_PRICE:
            return action.prices
        default:
            return state;
    }
}

export default newsReducer