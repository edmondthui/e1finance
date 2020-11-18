import * as PortfolioAPIUtil from '../util/portfolio_api_util'

export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS"
export const RECEIVE_PIES = "RECEIVE_PIES"
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO"
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS"

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

const receiveHoldings = (holdings) => {
    return {
        type: RECEIVE_HOLDINGS,
        holdings
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

export const fetchHoldings = (pieId) => {
    return (dispatch) => {
        PortfolioAPIUtil.getHoldings(pieId).then((holdings) => dispatch(receiveHoldings(holdings)))
    }
}