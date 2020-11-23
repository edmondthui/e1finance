import { RECEIVE_PIES, CREATE_PIE, DELETE_PIE } from '../actions/portfolio_actions'

const piesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PIES:
            return action.pies
        case CREATE_PIE:
            newState[Object.values(action.pie)[0].id] = Object.values(action.pie)[0];
            return newState
        case DELETE_PIE:
            delete newState[Object.values(action.pie)[0].id]
            return newState
        default:
            return state;
    }
}

export default piesReducer