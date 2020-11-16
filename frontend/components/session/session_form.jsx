import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    update (field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        const form = <form onSubmit={this.handleSubmit}>
            <p className="form-errors">{this.props.errors.map((error, idx)=> <li key={idx}>{error}</li>)}</p>
            <label>Email:
                <input type="text" onChange={this.update("email")}/>
            </label>

            <label>Password:
                <input type="password" onChange={this.update("password")}/>
            </label>

            <input type="submit" value={this.props.formType}/>
        </form>

        const formType = this.props.formType === "login" ? (
            <div className="login-form">
                <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo"/>
                <h2 fontSize="36px" fontWeight="600" color="#606C82">Welcome back!</h2>
                <p>Log in to your account</p>
                {form}
            </div>
        ) : (
            <div className="signup-form">
                <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo"/>
                <div>
                    <h1 fontSize="36px" fontWeight="600">Say goodbye to fees and hello to your perfect investment account</h1>
                    <ul>
                        <li>Customizable portfolios</li>
                        <li>Free investing</li>
                        <li>Best-in-class-security</li>
                    </ul>
                    {form}
                </div>
            </div>
        )
        return (
            <div className="form-container">
                {formType}
            </div>
        )
    }
}

export default SessionForm