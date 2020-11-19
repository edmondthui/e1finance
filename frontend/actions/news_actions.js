import * as ExternalAPIUtil from '../util/IEX_api_utl'

export const RECEIVE_STOCK_NEWS = "RECEIVE_STOCK_NEWS"
export const RECEIVE_ALL_NEWS = "RECEIVE_ALL_NEWS"

const receiveStockNews = (news) => {
    return {
        type: RECEIVE_STOCK_NEWS,
        news
    }
}

const receiveAllNews = (news) => {
    return {
        type: RECEIVE_ALL_NEWS,
        news
    }
}

export const fetchStockNews = (ticker) => {
    return (dispatch) => {
        ExternalAPIUtil.fetchCompanyNews(ticker).then((news) => dispatch(receiveStockNews(news)))
    }
}

export const fetchAllNews = () => {
    return (dispatch) => {
        ExternalAPIUtil.fetchStockNews().then((news) => dispatch(receiveAllNews(news)))
    }
}