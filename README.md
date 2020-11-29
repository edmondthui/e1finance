<p align="center">
  <img width="300" height="300" src="https://i.imgur.com/Qlg10Fz.png">
</p>  

# E1 Finance

[Live Demo](https://e1finance.herokuapp.com/#/)  
E1 Finance is a clone of an investing platfrom created by [M1 Finance](https://www.m1finance.com/). They are a startup that recently closed their Serices C round of funding. Users can simulate creating a portfolio and investing using pies to organize and manage their stocks. 

## Technologies used
* Frontend: React, Redux, CSS, HTML5
* Backend: Ruby on Rails, PostgreSQL
* Stock Data and Stock News: [IEX Trading API](https://iexcloud.io/)
* Charts and Pies: [Rcharts JS Library](http://recharts.org/en-US/)

## Features
### Organize Your Portfolio
Create portfolios with pies allowing you to choose your own stocks to build a portfolio completely customized to your unique financial goals and preferences. Each user can have many portfolios and each portfolio can have many pies with stocks. Graphs and pies a rendered using the Recharts JS Library and the interday stock data is fetched from the IEX Trading Api. I had the most trouble with this because in each portfolio there can be many pies each having many stocks. At first I had trouble figuring out how to get all the data from the IEX API and having the correct value added to the chart line for each stock. I solved this by calculating the percentage of the current porftolio for each stock and multiplying it by the total value of the portfolio.  
![E1 Finance Dashboard Demo](https://i.imgur.com/lbHPV8D.gif)

### Autobuy / Rebalancing
Dollar cost averaging is the best strategy for consistant long term profits. The autobuy feature allows the user to automatically divide their buying power into the pie's current percentages. The rebalancing feature allows users to set the percentage allocated to each stock in the pie. This feature uses the percerntages calculated earlier and allows users to change their current holding percentages of stocks. Rebalancing required a lot of other features to be working such as buying, selling, holdings, and activities. This was the last feature I added to my application and takes advantage the other features I implemented previously.  
![E1 Finance Autobuy and Rebalance Demo](https://i.imgur.com/QdiFT8u.gif)
