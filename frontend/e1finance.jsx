import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//TESTING
import {login, signup, logout} from './util/session_api_util'
import {getPortfolios} from './util/portfolio_api_util'
import {fetchPortfolios} from './actions/portfolio_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        let preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser
    } else {
        store = configureStore()
    }
    ReactDOM.render(<Root store={store} />, root)

    //TESTING
    window.fetchPortfolios = fetchPortfolios
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getPortfolios = getPortfolios
})