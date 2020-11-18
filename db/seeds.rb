# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed test user
User.create({ email: "warrenbuffett@gmail.com", password: "verystrongpassword"})

# Seed test stock
Stock.create({ ticker: "AAPL", name: "Apple Inc", price: 119.34})
Stock.create({ ticker: "MSFT", name: "Microsoft Corporation", price: 216.75})
Stock.create({ ticker: "V", name: "Visa Inc", price: 210.48})
Stock.create({ ticker: "JPM", name: "JPMorgan Chase & Co.", price: 115.02})
Stock.create({ ticker: "BAC", name: "Bank of America Corp", price: 27.15})
Stock.create({ ticker: "DIS", name: "Walt Disney Co", price: 143.40})
Stock.create({ ticker: "COST", name: "Costco Wholesale Corporation", price: 385.65})
Stock.create({ ticker: "HD", name: "Home Depot Inc", price: 271.40})
Stock.create({ ticker: "STOR", name: "Store Capital Corp", price: 31.97})
Stock.create({ ticker: "O", name: "Realty Income Corp", price: 63.20})

# Seet test portfolio
Portfolio.create({ portfolio_name: "Passive Income", user_id: 1})
Portfolio.create({ portfolio_name: "ROTH IRA", user_id: 1})

# Seed test pie
Pie.create({ pie_name: "Tech", percentage: 50, portfolio_id: 1})
Pie.create({ pie_name: "Real Estate", percentage: 50, portfolio_id: 1})
Pie.create({ pie_name: "Tech", percentage: 50, portfolio_id: 2})
Pie.create({ pie_name: "Real Estate", percentage: 50, portfolio_id: 2})

# Seet test holding
Holding.create({ quantity: 10, user_id: 1, stock_id: 1, pie_id: 1})
Holding.create({ quantity: 10, user_id: 1, stock_id: 2, pie_id: 1})
Holding.create({ quantity: 30, user_id: 1, stock_id: 9, pie_id: 2})
Holding.create({ quantity: 15, user_id: 1, stock_id: 10, pie_id: 2})
Holding.create({ quantity: 55, user_id: 1, stock_id: 1, pie_id: 3})
Holding.create({ quantity: 20, user_id: 1, stock_id: 2, pie_id: 3})
Holding.create({ quantity: 15, user_id: 1, stock_id: 9, pie_id: 4})
Holding.create({ quantity: 12, user_id: 1, stock_id: 10, pie_id: 4})
