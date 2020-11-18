import { RECEIVE_PORTFOLIOS, RECEIVE_PORTFOLIO} from '../actions/portfolio_actions'

const portfoliosReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PORTFOLIOS:
            return action.portfolios
        case RECEIVE_PORTFOLIO:
            newState[action.portfolio.id] = action.portfolio;
            return newState
        default:
            return state;
    }
}

export default portfoliosReducer