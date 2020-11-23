import React from 'react'
import {withRouter} from 'react-router-dom'

class CreatePie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pie_name: "",
            portfolio_id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPie(this.state);
        this.props.closeModal();
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value, portfolio_id: this.props.match.params.portfolioId})
        }
    }

    render() {
        return (
            <div className="create-pie-container">
                <div className="create-pie-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-portfolio-name">
                            <div onClick={this.props.closeModal} className="close-x">X</div>
                            <h3>Pie name</h3>
                            <p>Please enter the name of your pie.</p>
                            <input type="text" className="pie-input-name" value={this.state.name} onChange={this.update("pie_name")}/>
                        </div>
                        <input type="submit" value="Create Pie" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CreatePie)