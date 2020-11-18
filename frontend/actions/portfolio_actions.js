import * as PortfolioAPIUtil from '../util/portfolio_api_util'

export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS"
export const RECEIVE_PIES = "RECEIVE_PIES"
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO"

const receivePortfolios = (portfolios) => {
    return {
        type: RECEIVE_PORTFOLIOS,
        portfolios
    }
}

const receivePies = (pies) => {
    return {
        type: RECEIVE_PIES,
        pies
    }
}

const receivePortfolio = (portfolio) => {
    return {
        type: RECEIVE_PORTFOLIO,
        portfolio
    }
}

export const fetchPortfolios = () => {
    return (dispatch) => {
        PortfolioAPIUtil.getPortfolios().then((portfolios) => dispatch(receivePortfolios(portfolios)))
    }
}

export const fetchPies = (portfolioId) => {
    return (dispatch) => {
        PortfolioAPIUtil.getPies(portfolioId).then((pies) => dispatch(receivePies(pies)))
    }
}

export const fetchPortfolio = (portfolioId) => {
    return (dispatch) => {
        PortfolioAPIUtil.getPortfolio(portfolioId).then((portfolio) => dispatch(receivePortfolio(portfolio)))
    }
}