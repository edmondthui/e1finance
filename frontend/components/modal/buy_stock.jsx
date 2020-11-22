import React from 'react'
import {withRouter} from 'react-router-dom'

class BuyStock extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     value = 0
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // get the portfolio and holding information from the router
        // convert value into quanity number
        // add the quantity to the current holding quantity?
        this.props.createHolding(this.state);
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchStocks()
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <div className="create-portfolio-container">
                <div className="create-portfolio-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-portfolio-name">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <h3>Buy STOCKNAME HERE</h3>
                            <p>Please enter the name of your pie.</p>
                            <input type="number" value={0} onChange={this.update("value")}/>
                        </div>
                        <input type="submit" value="Create Pie" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(BuyStock)