import { RECEIVE_HOLDINGS, RECEIVE_HOLDING, REMOVE_HOLDING } from '../actions/portfolio_actions'

const holdingsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_HOLDINGS:
            return action.holdings
        case RECEIVE_HOLDING:
            newState = action.holding;
            return newState;
        case REMOVE_HOLDING:
            return {};
        default:
            return state;
    }
}

export default holdingsReducer