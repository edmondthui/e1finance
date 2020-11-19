import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//TESTING
import {login, signup, logout} from './util/session_api_util'
import {getPortfolios, getStocks} from './util/portfolio_api_util'
import {fetchPortfolios, fetchPies} from './actions/portfolio_actions'
import {fetchCompanyNews, fetchInterdayData, fetchStockNews} from './util/IEX_api_utl'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        let preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },  
        session: { id: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
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
    window.fetchPies = fetchPies
    window.fetchCompanyNews = fetchCompanyNews
    window.fetchInterdayData = fetchInterdayData
    window.fetchStockNews = fetchStockNews
    window.getStocks = getStocks
})