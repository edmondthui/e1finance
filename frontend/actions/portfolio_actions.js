import * as PortfolioAPIUtil from '../util/portfolio_api_util'
import * as ExternalAPIUtil from '../util/IEX_api_utl'

export const RECEIVE_STOCK_PRICE = "RECEIVE_STOCK_PRICE"
export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS"
export const RECEIVE_PIES = "RECEIVE_PIES"
export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO"
export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS"
export const RECEIVE_HOLDING = "RECEIVE_HOLDING"
export const RECEIVE_STOCKS = "RECEIVE_STOCKS"
export const RECEIVE_STOCK = "RECEIVE_STOCK"
export const REMOVE_HOLDING = "REMOVE_HOLDING"
export const CREATE_PORTFOLIO = "CREATE_PORTFOLIO"
export const DELETE_PORTFOLIO = "DELETE_PORTFOLIO"
export const CREATE_PIE = "CREATE_PIE"
export const DELETE_PIE = "DELETE_PIE"
export const CREATE_HOLDING = "CREATE_HOLDING"
export const UPDATE_BUYING_POWER = "UPDATE_BUYING_POWER"


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

const receiveStock = (stock) => {
    return {
        type: RECEIVE_STOCK,
        stock
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

export const fetchStock = (stockId) => {
    return (dispatch) => {
        PortfolioAPIUtil.getStock(stockId).then((stock) => dispatch(receiveStock(stock)))
    }
}

export const removeHolding = () => {
    return {
        type: REMOVE_HOLDING,
    }
}

export const createPortfolio = (portfolioData) => {
    return (dispatch) => {
        PortfolioAPIUtil.postPortfolio(portfolioData).then((portfolio) => dispatch(createPortfolioAction(portfolio)))
    }
}

const createPortfolioAction = (portfolio) => {
    return {
        type: CREATE_PORTFOLIO,
        portfolio
    }
}

const deletePortfolioAction = (portfolio) => {
    return {
        type: DELETE_PORTFOLIO,
        portfolio
    }
}

export const deletePortfolio = (portfolioId) => {
    return (dispatch) => {
        PortfolioAPIUtil.deletePortfolio(portfolioId).then((portfolio) => dispatch(deletePortfolioAction(portfolio)))
    }
}

const createPieAction = (pie) => {
    return {
        type: CREATE_PIE,
        pie
    }
}

export const createPie = (pieData) => {
    return (dispatch) => {
        PortfolioAPIUtil.postPie(pieData).then((pie) => dispatch(createPieAction(pie)))
    }
}

const deletePieAction = (pie) => {
    return {
        type: DELETE_PIE,
        pie
    }
}

export const deletePie = (pieId) => {
    return (dispatch) => {
        PortfolioAPIUtil.deletePie(pieId).then((pie) => dispatch(deletePieAction(pie)))
    }
}

const createHoldingAction = (holding) => {
    return {
        type: CREATE_HOLDING,
        holding
    }
}

export const createHolding = (holdingData) => {
    return (dispatch) => {
        PortfolioAPIUtil.createHolding(holdingData).then((holding) => dispatch(createHoldingAction(holding)))
    }
}

const updateBuyingPowerAction = (user) => {
    return {
        type: UPDATE_BUYING_POWER,
        user
    }
}

export const updateBuyingPower = (userData) => {
    return (dispatch) => {
        PortfolioAPIUtil.updateBuyingPower(userData).then((user) => dispatch(updateBuyingPowerAction(user)))
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