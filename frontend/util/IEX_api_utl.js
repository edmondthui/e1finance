export const fetchCompanyNews = (ticker) => (
  $.ajax({
    method: 'GET',
    // url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=${window.api_key}`
    url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/10?token=${window.api_key}`
    // COMMENTED OUT FOR NOW TO NOT WASTE API USES
   })
);

export const fetchInterdayData = (ticker) => (
  $.ajax({
    method: 'GET',
    url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?token=${window.api_key}`,
    // url: `https://sandbox.iexapis.com/stable/stock/${ticker.toLowerCase()}/intraday-prices?token=${window.api_key}`
  })
)