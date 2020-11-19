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
    @holdings.each do |holding|
        json.set! holding.id do
            json.id holding.id
            json.stock_name holding.stock.name
            json.value holding.value
            json.quantity holding.quantity
        end
    end
end