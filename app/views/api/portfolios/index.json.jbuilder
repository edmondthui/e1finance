@portfolios.each do |portfolio|
    tickers = []
    quantity = []
    names = []
    holding_percentages = []
    portfolio.pies.each do |pie|
        pie.stocks.each do |stock|
            names << stock.name
        end
        pie.holdings.each do |holding|
            holding_percentages.unshift(holding.value/pie.value)
            quantity.unshift(holding.quantity)
            tickers.unshift(Stock.find(holding.stock_id).ticker)
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
    end
end
