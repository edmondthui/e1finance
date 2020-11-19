import { RECEIVE_STOCK_NEWS } from '../actions/news_actions'

const newsReducer = (state=[], action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STOCK_NEWS:
            return action.news
        default:
            return state;
    }
}

export default newsReducer