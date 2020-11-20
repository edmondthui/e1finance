export const fetchCompanyNews = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=${window.api_key}`
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
    // COMMENTED OUT FOR NOW TO NOT WASTE API USES SANDBOX ^
   })
);

export const fetchInterdayData = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?token=${window.api_key}`,
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
    // SANDBOX ^
  })
)

export const fetchStockNews = () => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/spy/news/last/10?token=${window.api_key}`,
    // url: `https://sandbox.iexapis.com/stable/stock/spy/news/last/10?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
    // SANDBOX^
  })
)

export const fetchCompanyInfo = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/company?token=${window.api_key}`
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/company?token=Tpk_b52b6d3dff234c59994a24ccc7ecd48f`
  })
)