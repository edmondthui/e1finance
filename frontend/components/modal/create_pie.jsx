import React from 'react'

class CreatePie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createPie(this.state);
        this.props.closeModal();
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
                            <h3>Pie name</h3>
                            <p>Please enter the name of your pie.</p>
                            <input type="text" value={this.state.name} onChange={this.update("name")}/>
                        </div>
                        <input type="submit" value="Create Pie" className="create-portfolio-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePie