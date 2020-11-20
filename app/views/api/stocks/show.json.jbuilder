json.set! @stock.id do
    json.id @stock.id
    json.stock_name @stock.name
    json.ticker @stock.ticker
    json.value @stock.price
end