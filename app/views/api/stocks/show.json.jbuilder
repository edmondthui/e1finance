json.set! @holding.id do
    json.id @holding.id
    json.stock_name @holding.stock.name
    json.value @holding.value
    json.ticker @holding.stock.ticker
    json.quantity @holding.quantity
end