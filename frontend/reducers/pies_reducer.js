import { RECEIVE_PIES } from '../actions/portfolio_actions'

const piesReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIES:
            return action.pies
        default:
            return state;
    }
}

export default piesReducer