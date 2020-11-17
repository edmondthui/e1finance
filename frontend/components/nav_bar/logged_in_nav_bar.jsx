import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class LoggedInNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push("/");
    }

    profileClick(e) {
        
    }
    
    render() {
        return (
            <div>
                <section className="logged-in-nav-bar">
                    <img className="logged-in-nav-logo" src="https://i.postimg.cc/RhjfyxGm/E-2.png" alt="E1 Logo" height="50" width="50" onClick={this.handleClick}/>
                        <nav className="nav-content">

                            <div className="logged-in-nav-container">
                                <p className="logged-in-nav-content">Invest</p>
                                <p className="logged-in-nav-content">Spend</p>
                                <p className="logged-in-nav-content">Borrow</p>
                                <p className="logged-in-nav-content">Research</p>
                                <p className="logged-in-nav-content">Transfer</p>
                            </div>
                        </nav>
                        <div className="profile-button-container">
                            <div className="profile-button" onClick={this.profileClick}>
                                <img src="https://i.postimg.cc/KcBxNK2k/profile-image.png" alt="profile-button-img" height="20" width="20"/>
                                Profile
                            </div>

                        </div>
                </section>
            </div>
        )
    }
    

}

export default withRouter(LoggedInNavBar)