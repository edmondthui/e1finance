export const getPortfolios = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/portfolios',
    })
}
