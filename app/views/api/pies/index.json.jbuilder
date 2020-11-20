@pies.each do |pie|
    holding_percentages = []
    tickers = []
    pie.stocks.each do |stock|
        tickers << stock.ticker
    end
    pie.holdings.each do |holding|
        holding_percentages << (holding.value/pie.value)
    end
    json.set! pie.id do
        json.id pie.id
        json.pie_name pie.pie_name
        json.value pie.value
        json.percentage pie.percentage
        # json.holding_ids pie.stocks.ids
        json.tickers tickers
        json.holding_percentages holding_percentages
    end
end
