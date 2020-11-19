import React from 'react'
import { withRouter } from 'react-router-dom'


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: "",
            password: ""
        };
        this.demoLogin = this.demoLogin.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processForm({
            email: "warrenbuffett@gmail.com", 
            password: "verystrongpassword"
        });
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

    handleClick(e) {
        e.preventDefault()
        this.props.history.push("/");
    }

    componentWillUnmount(){
        this.props.clearErrors();
    };


    render() { 
        const e1Logo = <img src="https://i.postimg.cc/jjXLsv17/Untitled-design-52.png" alt="E1 Logo" width="50" height="50" id="form-logo" onClick={this.handleClick}/>
        const formName = (this.props.formType==="Log In") ? ("login") : ("signup");
        const form = <form className={`${formName}-form`}>
            <div className="form-errors">
                {this.props.errors.map((error, idx)=> <li key={idx}>{error}</li>)}
            </div>
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
                <input type="submit" value={this.props.formType} onClick={this.handleSubmit}/>
            </div>
            <div className="input-submit demo-login">
                <input type="button" value={"Demo Log In"} onClick={this.demoLogin}/>
            </div>

        </form>

        const formType = (this.props.formType === "Log In") ? (
            <div className="login-form-container">
                {e1Logo}
                <h2>Welcome back!</h2>
                <p>Log in to your account</p>
                {form}
            </div>
        ) : (
            <div className="signup-form-container">
                {e1Logo}
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
        );
        return (
            <div className="form-container">
                {formType}
            </div>
        )
    }
}

export default withRouter(SessionForm)