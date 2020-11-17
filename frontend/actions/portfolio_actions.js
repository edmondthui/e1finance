import * as PortfolioAPIUtil from '../util/portfolio_api_util'

export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS"

const receivePortfolios = (portfolios) => {
    return {
        type: RECEIVE_PORTFOLIOS,
        portfolios
    }
}

export const fetchPortfolios = () => {
    return (dispatch) => {
        PortfolioAPIUtil.getPortfolios().then((portfolios) => dispatch(receivePortfolios(portfolios)))
    }
}