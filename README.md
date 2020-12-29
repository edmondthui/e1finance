<p align="center">
  <img width="300" height="300" src="https://i.imgur.com/Qlg10Fz.png">
</p>  

# E1 Finance

[Live Demo](https://e1finance.herokuapp.com/#/)  
E1 Finance is a clone of an investing platform created by [M1 Finance](https://www.m1finance.com/). Users can simulate creating a portfolio and investing using pies to organize and manage their stocks. 

## Technologies Used
* Frontend: React, Redux, CSS, HTML5
* Backend: Ruby on Rails, PostgreSQL
* Stock Data and Stock News: [IEX Trading API](https://iexcloud.io/)
* Charts and Pies: [Rcharts JS Library](http://recharts.org/en-US/)

## Key Features
* Portfolio / Pie / Stock Dashboard
* Buy & Sell Stocks
* Autobuy & Rebalancing
* Holdings & Activities
* Withdraw & Deposit
* Research Stocks & News  

## Challenges & Solutions
### Portfolio Dashboard
Users can create portfolios with many pies allowing them to choose their own stocks to build a portfolio completely customized to their unique financial goals and preferences. Each user can have many portfolios and each portfolio can have many pies with many stocks. Graphs and pies are rendered using the Recharts JS Library and the interday stock data and news is fetched from the IEX Trading Api. I had the most trouble with this because in each portfolio there can be many pies each having many stocks and it was difficult to calculate the correct portfolio value. At first I had trouble figuring out how to get all the data from the IEX API and having the correct value calculated for the chart line. I solved this by creating additional associations and configuring the data in the rails jbuilder file. I made it easy to calculate the value of that holding by passing the quantity, tickers, and holding percentages from the backend through jbuilder to the frontend.  
![E1 Finance Dashboard Demo](https://i.imgur.com/lbHPV8D.gif)

### Autobuy & Rebalancing
Dollar cost averaging is the best strategy for consistant long term profits. The autobuy feature allows the user to automatically divide their buying power into the pie's current percentages. The rebalancing feature allows users to set the percentage allocated to each stock in the pie. This feature uses the percerntages calculated earlier and allows users to change their current holding percentages of stocks. Rebalancing required all other features to be working such as buying, selling, holdings, and activities.  
```JavaScript
  handleSubmit(e) {
    let percentages = this.percentages;
    let pie = this.props.pie;
    e.preventDefault();
    let percentage = 0;
    Object.keys(percentages).forEach((key) => {
      percentage += parseInt(percentages[key]);
    });
    if (percentage !== 100) { this.props.closeModal() }
    if (Object.values(percentages).includes("0")) { this.props.closeModal() } else {
      this.props.holdings.forEach((holding, idx) => {
        if (parseInt(Object.values(percentages)[idx]) !== 0) {
          let value = this.props.pie.value * (Object.values(percentages)[idx] / 100);
          let quantity = value / holding.price;
          let update = { quantity: quantity - holding.quantity, pie_id: this.props.pie_id, stock_id: holding.stock_id, user_id: this.props.user.id, id: holding.id, };
          let activity = { activity: holding.stock_name, name: "Rebalance", value: value, user_id: this.props.user.id, };
          this.props.updateHolding(update);
          this.props.createActivity(activity);
        } else {
          let value = pie.value * holding.percentage;
          let activity = { activity: holding.stock_name, name: "Rebalance", value: value, user_id: this.props.user.id, };
          this.props.removeHolding(holding.id);
          this.props.createActivity(activity);
        }
      });
    }
    this.props.closeModal();
  }
  ```  
  This was the last feature I added to my application and takes advantage of the features I implemented previously. Rebalancing either triggers a buy or sell depending if the percentage the users sets is higher or lower than the current percentage. Then, this updates holdings in the database. Lastly, it adds a new activity for the user.  
![E1 Finance Autobuy and Rebalance Demo](https://i.imgur.com/QdiFT8u.gif)
