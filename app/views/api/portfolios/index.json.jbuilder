@portfolios.each do |portfolio|
    tickers = []
    quantity = []
    names = []
    holding_percentages = []
    portfolio.pies.each do |pie|
        pie.stocks.each do |stock|
            tickers << stock.ticker
            names << stock.name
        end
        pie.holdings.each do |holding|
            holding_percentages << (holding.value/pie.value)
            quantity << holding.quantity
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
