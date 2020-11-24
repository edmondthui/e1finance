# E1 Finance

[Live Demo](https://e1finance.herokuapp.com/#/)
E1 Finance is a clone of an investing platfrom created by ,[M1 Finance](https://www.m1finance.com/), a startup that recently closed their Serices C round of funding. Users can simulate creating a portfolio and investing using pies to organize and manage your stocks. 

## Technologies used
* Frontend: React, Redux, CSS, HTML5
* Backend: Ruby on Rails, PostgreSQL
* Stock Data and Stock News: [IEX Trading API](https://iexcloud.io/)
* Charts and Pies: [Rcharts JS Library](http://recharts.org/en-US/)

## Features
### Organize Your Portfolio
Create portfolios with pies allowing you to choose your own stocks to build a portfolio completely customized to your unique financial goals and preferences. Each user can have many portfolios and each portfolio can have many pies with stocks. Graphs and pies a rendered using the Recharts JS Library and the interday stock data is fetched from the IEX Trading Api.  
![E1 Finance Dashboard Demo](https://im3.ezgif.com/tmp/ezgif-3-cdf7a69b1bb5.gif)

### Buy and Sell Stocks
Buy and sell stocks and frational shares are automatically calulated and purchased to the account. Buying shares of stock that are already owned in your pie will update that holding. Buying shares of a stock you don't already own will create a new holding. Selling some shares of a stock that you own will update that holding. Selling all shares will delete that holding from the user.  
![E1 Finance Buy / Sell Demo](https://im3.ezgif.com/tmp/ezgif-3-5be0fbfeb9cd.gif)

### Holdings & Activities
All buy, sell, withdraw, and deposit activities are tracked on the activity page. Holdings are all tracked on the holdings page. Each activity is tracked in the backend with a separate activities table and each action sends a create request to the backend.  
![E1 Finance Holdings & Activities Demo](https://im3.ezgif.com/tmp/ezgif-3-fb73753e9b5d.gif)

### Withdraw / Deposit
Change buying power with the withdraw and deposit buttons. Each user starts of with a buying power of $1,000,000 and this number will change with each buy, sell, deposit, and withdrawl.  
![E1 Finance Withdraw & Deposit Demo](https://im3.ezgif.com/tmp/ezgif-3-e57b4603827c.gif)

### Research
Check market news and research stock info and individual stock news. News with links, images, headlines, and details are fetched using the IEX Trading API.  
![E1 Finance Research Demo](https://im3.ezgif.com/tmp/ezgif-3-2c69445109a5.gif)
