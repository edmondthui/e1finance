export const getPortfolios = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/portfolios',
    })
}

export const getPortfolio = (portfolioId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/portfolios/${portfolioId}`,
        data: { portolio: {id: portfolioId} }
    })
}


export const getPies = (portfolioId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/pies',
        data: { pie: { portfolio_id: portfolioId }}
    })
}

export const getHoldings = (pieId) => {
    return $.ajax({
        method: 'GET',
        url: '/api/stocks',
        data: { stock: { pie_id: pieId }}
    })
}

export const getHolding = (holdingId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/holdings/${holdingId}`
    })
}

export const getStock = (stockId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/stocks/${stockId}`
    })
}

export const getStocks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/stocks'
    })
}