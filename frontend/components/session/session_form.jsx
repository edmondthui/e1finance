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
        const formName = (this.props.formType==="Log In") ? "login" : "signup"
        const form = 
        <form onSubmit={this.handleSubmit} className={`${formName}-form`}>
            <p className="form-errors" >{this.props.errors.map((error, idx)=> <li key={idx}>{error}</li>)}</p>
            <div className="input-form">
                <label>Email:
                    <input type="text" onChange={this.update("email")}/>
                </label>
            </div>
            <div className="input-form">
                <label>Password:
                    <input type="password" onChange={this.update("password")}/>
                </label>
            </div>
            <div className="input-submit">
                <input type="submit" value={this.props.formType}/>
            </div>
        </form>

        const formType = (this.props.formType === "Log In") ? (
            <div className="login-form-container">
                <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo" width="50" height="50"/>
                <h2>Welcome back!</h2>
                <p>Log in to your account</p>
                {form}
            </div>
        ) : (
            <div className="signup-form-container">
                <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo" width="50" height="50"/>
                <div className="signup-content">
                    <div className="signup-form-text">
                        <h1 fontSize="36px" fontWeight="600">Say goodbye to fees and hello to your perfect investment account</h1>
                        <ul>
                            <li>Customizable portfolios</li>
                            <li>Free investing</li>
                            <li>Best-in-class-security</li>
                        </ul>
                    </div>
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