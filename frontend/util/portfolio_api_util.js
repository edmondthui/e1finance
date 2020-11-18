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