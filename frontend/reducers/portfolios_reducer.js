import { RECEIVE_PORTFOLIOS, RECEIVE_PORTFOLIO, CREATE_PORTFOLIO, DELETE_PORTFOLIO} from '../actions/portfolio_actions'

const portfoliosReducer = (state={}, action) => {
    Object.freeze(state);
    debugger;
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PORTFOLIOS:
            return action.portfolios
        case RECEIVE_PORTFOLIO:
            newState[action.portfolio.id] = action.portfolio;
            return newState;
        case CREATE_PORTFOLIO:
            newState[action.portfolio.id] = action.portfolio;
            return newState
        case DELETE_PORTFOLIO:
            delete newState[Object.values(action.portfolio)[0].id]
            return newState
        default:
            return state;
    }
}

export default portfoliosReducer