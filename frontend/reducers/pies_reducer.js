import { RECEIVE_PIES, CREATE_PIE } from '../actions/portfolio_actions'

const piesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PIES:
            return action.pies
        case CREATE_PIE:
            newState[action.pie.id] = action.pie;
            return newState
        default:
            return state;
    }
}

export default piesReducer