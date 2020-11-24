import React from 'react'
import {withRouter } from 'react-router-dom'

class SellStock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            pie_id: null,
            stock_id: this.props.holdings[0].stock_id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteHolding = this.deleteHolding.bind(this)
    }

    deleteHolding(e) {
        e.preventDefault()
        let holding = this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0]
        let activity = {activity: "Sell", name: holding.stock_name, value: this.state.value, user_id: this.props.user.id}
        this.props.removeHolding(holding.id);
        this.props.createActivity(activity)
        this.props.updateBuyingPower({id: this.props.user.id, buying_power: + holding.value})
        this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        let quantity = (this.state.value / this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0].price)
        let holding = this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0]
        let activity = {activity: "Sell", name: holding.stock_name, value: this.state.value, user_id: this.props.user.id}
        let sell = {quantity: -quantity, pie_id: this.state.pie_id, stock_id: this.state.stock_id, user_id: this.props.user.id, id: holding.id}
        if (-sell.quantity.toFixed(2) === holding.quantity.toFixed(2)) {
            this.props.removeHolding(holding.id);
            this.props.createActivity(activity)
            this.props.updateBuyingPower({id: this.props.user.id, buying_power: + this.state.value})
        }
        else if (-sell.quantity.toFixed(2) < holding.quantity.toFixed(2)) {
            this.props.updateHolding(sell);
            this.props.createActivity(activity)
            this.props.updateBuyingPower({id: this.props.user.id, buying_power: + this.state.value})
        }
        this.props.closeModal();
    }

    componentDidMount() {
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
        let options = this.props.holdings.map(holding => (
            <option value={holding.stock_id}>{holding.stock_name}</option>
        ))
        return (
            <div className="buy-stock-container">
                <div className="buy-stock-form-container">
                    <form onSubmit={this.handleSubmit} className="buy-form">
                        <div className="buy-stock-form-items">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <div className="buy-form-title">
                                <h3>{this.state.stock_id ? `Sell ${this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0].stock_name}` : "Sell Stock"}</h3>
                            </div>
                            <select className="portfolio-select" name="portfolio" onChange={this.update("stock_id")}>
                                {options}
                            </select>
                            <div className="input-value-buy-container">
                                <div className="input-value-number-container">
                                    <p className="buy-dollar-sign">$</p>
                                    <input type="number" className="input-value-buy"  step=".01" value={this.state.value} placeholder="0" onChange={this.updateBuy("value")}/>
                                </div>
                            </div>

                            <div className = "cash-balance-container">
                                <p>Currrent cash balance</p>
                                <p>{"$"+this.props.user.buying_power.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>
                        </div>
                        <div className="sell-buttons">
                            <input type="submit" value="Sell Stock" className="create-portfolio-submit"/>
                            <button className={"delete-holding"} onClick={this.deleteHolding}>Sell All Shares</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SellStock)