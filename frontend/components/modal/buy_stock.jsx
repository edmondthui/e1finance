import React from 'react'
import {withRouter} from 'react-router-dom'

class BuyStock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            pie_id: null,
            stock_id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let stockId = this.state.stock_id ? this.state.stock_id : this.props.stocks[0].id
        let holding = this.props.holdings.filter(holding => holding.stock_id === stockId)[0]
        let quantity = (this.state.value / this.props.stocks[stockId-1].value)
        let buy = {quantity: quantity, pie_id: this.state.pie_id, stock_id: stockId, user_id: this.props.user.id}
        if (this.state.value > this.props.user.buying_power) {
            this.props.closeModal();
            // break;
        }
        else if (this.props.holdings.filter(holding => holding.stock_id === stockId).length >= 1) {
            let holdingData = {quantity: quantity, pie_id: this.state.pie_id, stock_id: this.state.stock_id, user_id: this.props.user.id, id: holding.id}
            this.props.updateHolding(holdingData)
            this.props.updateBuyingPower({id: this.props.user.id, buying_power: -this.state.value})

        }
        else {
            this.props.createHolding(buy);
            this.props.updateBuyingPower({id: this.props.user.id, buying_power: -this.state.value})
        }
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchStocks()
        this.props.fetchHoldings(this.props.match.params.pieId)
    }

    updateBuy(field) {
        return (e) => {
            e.currentTarget.style.width = e.currentTarget.value.length + "ch";
            this.setState({[field]: e.currentTarget.value})
            this.setState({pie_id: this.props.match.params.pieId})
        }
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
            this.setState({pie_id: this.props.match.params.pieId})
        }
    }

    render() {
        let options = this.props.stocks.map(stock => (
            <option value={stock.id}>{stock.stock_name}</option>
        ))
        return (
            <div className="buy-stock-container">
                <div className="buy-stock-form-container">
                    <form onSubmit={this.handleSubmit} className="buy-form">
                        <div className="buy-stock-form-items">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <div className="buy-form-title">
                                <h3>{this.state.stock_id ? `Buy ${this.props.stocks[this.state.stock_id-1].stock_name}` : "Buy Stock"}</h3>
                            </div>
                            <select className="portfolio-select" name="portfolio" onChange={this.update("stock_id")}>
                                {options}
                            </select>
                            <div className="input-value-buy-container">
                                <div className="input-value-number-container">
                                    <p className="buy-dollar-sign">$</p>
                                    <input type="number" className="input-value-buy"  step=".01" value={this.state.value} onChange={this.updateBuy("value")}/>
                                </div>
                            </div>

                            <div className = "cash-balance-container">
                                <p>Currrent cash balance</p>
                                <p>{"$"+this.props.user.buying_power.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>
                        </div>
                        <input type="submit" value="Buy Stock" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BuyStock)