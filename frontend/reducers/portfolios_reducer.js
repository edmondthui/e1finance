import { RECEIVE_PORTFOLIOS } from '../actions/portfolio_actions'

const portfoliosReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PORTFOLIOS:
            return action.portfolios
        default:
            return state;
    }
}

export default portfoliosReducer