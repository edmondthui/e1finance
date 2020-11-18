json.set! @portfolio.id do
    json.id @portfolio.id
    json.value @portfolio.value
    json.portfolio_name @portfolio.portfolio_name
end