import { RECEIVE_CURRENT_USER, UPDATE_BUYING_POWER } from '../actions/session_actions'


const usersReducer = (state ={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser})
        case UPDATE_BUYING_POWER:
            newState.currentUser.buying_power = action.user.buying_power
            return newState
        default:
            return state;
    }
}

export default usersReducer;