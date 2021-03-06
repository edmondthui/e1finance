@portfolios.each do |portfolio|
    tickers = []
    quantity = []
    names = []
    holding_percentages = []
    images = []
    prices = []
    portfolio.pies.each do |pie|
        pie.holdings.each do |holding|
            names.unshift(holding.stock.name)
            images.unshift(holding.stock.image)
            holding_percentages.unshift(holding.value/pie.value)
            quantity.unshift(holding.quantity)
            tickers.unshift(Stock.find(holding.stock_id).ticker)
            prices.unshift(holding.stock.price)
        end
    end
    json.set! portfolio.id do
        json.id portfolio.id
        json.value portfolio.value
        json.portfolio_name portfolio.portfolio_name
        json.tickers tickers
        json.holding_percentages holding_percentages
        json.quantity quantity
        json.names names
        json.images images
        json.prices prices
    end
end
