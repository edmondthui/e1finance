import * as PortfolioAPIUtil from '../util/portfolio_api_util'
import * as ExternalAPIUtil from '../util/IEX_api_utl'

export const RECEIVE_STOCK_PRICE = "RECEIVE_STOCK_PRICE"

export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS"
export const RECEIVE_PIES = "RECEIVE_PIES"
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO"
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS"
export const RECEIVE_HOLDING = "RECEIVE_HOLDING"
export const RECEIVE_STOCKS = "RECEIVE_STOCKS"

const receiveStocks = (stocks) => {
    return {
        type: RECEIVE_STOCKS,
        stocks
    }
}

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

const receiveHolding = (holding) => {
    return {
        type: RECEIVE_HOLDING,
        holding
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

export const fetchHolding = (holdingId) => {
    return (dispatch) => {
        PortfolioAPIUtil.getHolding(holdingId).then((holding) => dispatch(receiveHolding(holding)))
    }
}

export const fetchStocks = () => {
    return (dispatch) => {
        PortfolioAPIUtil.getStocks().then((stocks) => dispatch(receiveStocks(stocks)))
    }
}




// FOR UPDATING STOCK GRAPH PRICES


const receiveStockPrice = (prices) => {
    return {
        type: RECEIVE_STOCK_PRICE,
        prices
    }
}

export const fetchStockPrice = (ticker) => {
    return (dispatch) => {
        ExternalAPIUtil.fetchInterdayData(ticker).then((prices) => dispatch(receiveStockPrice(prices)))
    }
}