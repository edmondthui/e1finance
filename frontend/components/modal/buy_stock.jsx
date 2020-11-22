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
        // get the portfolio and holding information from the router
        // convert value into quanity number

        // add the quantity to the current holding quantity?
        debugger;
        let quantity = (this.state.value / this.props.stocks[this.state.stock_id-1].value)
        let buy = {quantity: quantity, pie_id: this.state.pie_id, stock_id: this.state.stock_id, user_id: this.props.user.id}
        this.props.createHolding(buy);
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchStocks()
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
            <div className="create-portfolio-container">
                <div className="create-portfolio-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-portfolio-name">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <h3>Buy Stock</h3>
                            <select className="portfolio-select" name="portfolio" onChange={this.update("stock_id")}>
                                {options}
                            </select>
                            <input type="number" value={this.state.value} onChange={this.update("value")}/>
                        </div>
                        <input type="submit" value="Buy Stock" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BuyStock)