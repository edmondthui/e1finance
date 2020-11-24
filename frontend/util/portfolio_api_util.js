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

export const postPortfolio = (data) => {
    return $.ajax({
        method: 'POST',
        url: '/api/portfolios',
        data: { portfolio: {portfolio_name: data.name} }
    })
}

export const deletePortfolio = (portfolioId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/portfolios/${portfolioId}`
    })
}

export const postPie = (data) => {
    return $.ajax({
        method: 'POST',
        url: '/api/pies',
        data: { pie: {pie_name: data.pie_name, portfolio_id: data.portfolio_id} }
    })
}

export const deletePie = (pieId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/pies/${pieId}`
    })
}

export const createHolding = (holdingData) => {
    return $.ajax({
        method: "POST",
        url: `/api/holdings`,
        data: { holding: holdingData }
    })
}

export const updateBuyingPower = (userData) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${userData.id}`,
        data: { user: userData }
    })
}

export const updateHolding = (holdingData) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/holdings/${holdingData.id}`,
        data: { holding: holdingData }
    })
}

export const removeHolding = (holdingId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/holdings/${holdingId}`
    })
}

export const updateStock = (stockData) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/stocks/${stockData.id}`,
        data: { stock: stockData}
    })
}

export const getActivities = () => {
    return $.ajax({
        method: "GET",
        url: '/api/activities'
    })
}

export const createActivity = (activityData) => {
    return $.ajax({
        method: "POST",
        url: '/api/activities',
        data: { activity: activityData}
    })
}