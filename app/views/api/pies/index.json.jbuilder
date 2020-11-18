@pies.each do |pie|
    json.set! pie.id do
        json.id pie.id
        json.pie_name pie.pie_name
        json.value pie.value
        json.percentage pie.percentage
        json.holding_ids pie.stocks.ids
    end
end
