import React from 'react'
import {withRouter } from 'react-router-dom'




class Rebalance extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     value: null,
        //     pie_id: null,
        //     stock_id: this.props.holdings[0] ? this.props.holdings[0].stock_id : null
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.percentages = {};
    }

    handleSubmit(e) {
        let percentages = this.percentages
        let pie = this.props.pie
        e.preventDefault();
        let percentage = 0;
        Object.keys(percentages).forEach(key => {
            percentage += parseInt(percentages[key])
        })
        if (percentage !== 100) {
            this.props.closeModal();
        }
        if (Object.values(percentages).includes("0")) {
            this.props.closeModal();
        }
        else {
            this.props.holdings.forEach((holding, idx )=> {
                if (parseInt(Object.values(percentages)[idx]) !== 0) {
                    let value = this.props.pie.value * (Object.values(percentages)[idx]/100)
                    let quantity = value / holding.price
                    let update = {quantity: quantity-holding.quantity, pie_id: this.props.pie_id, stock_id: holding.stock_id, user_id: this.props.user.id, id: holding.id}
                    let activity = {activity: holding.stock_name, name: "Rebalance", value: value, user_id: this.props.user.id}
                    this.props.updateHolding(update)
                    this.props.createActivity(activity)
                }
                else {
                    let value = pie.value * holding.percentage
                    let activity = {activity: holding.stock_name, name: "Rebalance", value: value, user_id: this.props.user.id}
                    this.props.removeHolding(holding.id);
                    this.props.createActivity(activity)
                }
            })
        }
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchHoldings(this.props.match.params.pieId)
    }

    handleChange(e) {
        if (e.target.value > 100) {
            e.target.value = 100
        }
        if (e.target.value < 0) {
            e.target.value = 0
        }
        e.currentTarget.style.width = e.currentTarget.value.length + "ch";
        this.percentages[e.currentTarget.name] = e.currentTarget.value
    }

    render() {
        let holdings = this.props.holdings.map((holding, idx )=> (
            <div className="rebalance-inputs" key={idx}>
                <p>{holding.stock_name}</p>
                <div>
                    <input type="number" placeholder ={(holding.percentage* 100).toFixed(2)} className="rebalance-input" name={holding.ticker} onChange={this.handleChange}/>
                    <p>%</p>
                </div>
            </div>
        ))
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