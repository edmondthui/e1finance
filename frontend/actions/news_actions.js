import * as ExternalAPIUtil from '../util/IEX_api_utl'

export const RECEIVE_STOCK_NEWS = "RECEIVE_STOCK_NEWS"
export const RECEIVE_ALL_NEWS = "RECEIVE_ALL_NEWS"
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO"

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

const receiveCompanyInfo = (info) => {
    return {
        type: RECEIVE_COMPANY_INFO,
        info
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

export const fetchCompanyInfo = (ticker) => {
    return (dispatch) => {
        ExternalAPIUtil.fetchCompanyInfo(ticker).then((info) => dispatch(receiveCompanyInfo(info)))
    }
}