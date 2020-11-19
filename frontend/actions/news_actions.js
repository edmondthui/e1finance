import * as ExternalAPIUtil from '../util/IEX_api_utl'

export const RECEIVE_STOCK_NEWS = "RECEIVE_STOCK_NEWS"

const receiveStockNews = (news) => {
    return {
        type: RECEIVE_STOCK_NEWS,
        news
    }
}

export const fetchStockNews = (ticker) => {
    return (dispatch) => {
        ExternalAPIUtil.fetchCompanyNews(ticker).then((news) => dispatch(receiveStockNews(news)))
    }
}