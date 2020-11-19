export const fetchCompanyNews = (ticker) => (
    $.ajax({
      url: `https://cloud.iexapis.com/stable/stock/${ticker.toLowerCase()}/news/last/8?token=${window.api_key}`,
      method: 'GET'
    })
  );