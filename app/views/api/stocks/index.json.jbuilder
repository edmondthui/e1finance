if @stocks
    @stocks.each do |stock|
        json.set! stock.id do
            json.id stock.id
            json.ticker stock.ticker
            json.stock_name stock.name
            json.value stock.price
        end
    end
else
    value = 0
    @holdings.each do |holding|
        value += holding.value
    end
    @holdings.each do |holding|
        json.set! holding.id do
            json.id holding.id
            json.stock_id holding.stock.id
            json.stock_name holding.stock.name
            json.ticker holding.stock.ticker
            json.value holding.value
            json.quantity holding.quantity
            json.total_value value
            json.percentage holding.value/value
            json.price holding.stock.price
        end
    end
end