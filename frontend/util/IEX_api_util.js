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
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/company?token=${window.api_key}`
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/company?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
  })
)
