import React from 'react'
import {withRouter } from 'react-router-dom'

class Rebalance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null,
            pie_id: null,
            stock_id: this.props.holdings[0] ? this.props.holdings[0].stock_id : null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.stock_id === null) {
            this.props.closeModal();
        }
        else {
            let quantity = (this.state.value / this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0].price)
            let holding = this.props.holdings.filter(holding => holding.stock_id === parseInt(this.state.stock_id))[0]
            let activity = {activity: holding.stock_name, name: "Sell", value: this.state.value, user_id: this.props.user.id}
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
        }
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchHoldings(this.props.match.params.pieId)
    }


    render() {
        let holdings = this.props.holdings.map((holding, idx )=> (
            <div className="rebalance-inputs" key={idx}>
                <p>{holding.stock_name}</p>
                <div>
                    <input type="number" value ={holding.percentage.toFixed(2)* 100} className="rebalance-input"/>
                    <p>%</p>
                </div>
            </div>
        ))
        if ( this.state.stock_id === null ) {
            options = <option>Please buy a stock first.</option>
        }
        return (
            <div className="rebalance-container">
                <div className="buy-stock-form-container">
                    <form onSubmit={this.handleSubmit} className="rebalance-form">
                        <div className="rebalance-form-items">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <div className="buy-form-title">
                                <h3>Rebalance {this.props.pie.pie_name}</h3>
                            </div>
                            <div className="rebalance-inputs-container">
                                {holdings}
                            </div>

                            <div className = "cash-balance-container">
                                <p>Currrent pie value</p>
                                <p>{"$"+this.props.pie.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>
                        </div>
                        <div className="rebalance-submit-button">
                            <input type="submit" value="Rebalance Pie" className="create-portfolio-submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Rebalance)