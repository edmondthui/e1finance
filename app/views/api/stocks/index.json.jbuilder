@holdings.each do |holding|
    json.set! holding.id do
        json.id holding.id
        json.stock_name holding.stock.name
        json.value holding.value
        json.quantity holding.quantity
    end
end
