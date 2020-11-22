import React from 'react'
import { withRouter } from 'react-router-dom'

class DeletePie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deletePie(this.state.id)
        this.props.closeModal();
    }

    componentDidMount() {
        this.props.fetchPies(this.props.match.params.portfolioId)
    }

    onChange(e) {
        this.setState({
            id: e.currentTarget.value
        })
    }

    render() {
        let options = this.props.pies.map(pie => (
            <option value={pie.id}>{pie.pie_name}</option>
        ))
        return (
            <div className="create-portfolio-container">
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="create-portfolio-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="create-portfolio-name">
                            <h3>Account name</h3>
                            <p>Please select the pie you want to delete.</p>
                            <select className="portfolio-select" name="portfolio" onChange={this.onChange}>
                                {options}
                            </select>
                        </div>

                        <input type="submit" value="Delete Pie" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(DeletePie)