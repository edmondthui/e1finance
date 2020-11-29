export const fetchCompanyNews = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=${window.api_key}`
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
   })
);

export const fetchInterdayData = (ticker) => {
  if (ticker===undefined) ticker = "aapl"
  return $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?&chartInterval=5&token=${window.api_key}`,
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
  })
}

export const fetchStockNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/spy/news/last/10?token=${window.api_key}`,
    // url: `https://sandbox.iexapis.com/stable/stock/spy/news/last/10?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
  })
)

export const fetchCompanyInfo = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/company/batch?types=quote&filter=description,exchange,CEO,employees,website&token=${window.api_key}`
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/company?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
  })
)

// FINN API

export const fetchCompanyInfo2 = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker.toLowerCase()}&token=${window.finn_api_key}`
    // url: `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker.toLowerCase()}&token=sandbox_bv08j8f48v6s4f9bj0i0`
  })
)
