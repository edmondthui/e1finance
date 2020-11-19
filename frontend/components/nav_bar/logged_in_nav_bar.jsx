import React from 'react';
import { withRouter } from 'react-router-dom'

class LoggedInNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push("/");
    }

    handleLogout(e) {
        e.preventDefault()
        this.props.logout()
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
                                {/* <p className="logged-in-nav-content">Spend</p> */}
                                {/* <p className="logged-in-nav-content">Borrow</p> */}
                                <p className="logged-in-nav-content">Research</p>
                                {/* <p className="logged-in-nav-content">Transfer</p> */}
                            </div>
                        </nav>
                        <div className="profile-button-container">
                            <div className="profile-button" id="profile-button" onClick={this.profileClick}>
                                <img src="https://i.postimg.cc/KcBxNK2k/profile-image.png" alt="profile-button-img" height="20" width="20"/>
                                Profile
                                <div className="profile-hover">
                                    <div className="profile-hover-content">
                                        <p className="profile-hover-title">Made by Edmond Hui</p>
                                        <p className="profile-hover-email">{this.props.user.email}</p>
                                        <button id="logout-button" onClick={this.handleLogout}>Log Out</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                </section>
            </div>
        )
    }
    

}

export default withRouter(LoggedInNavBar)