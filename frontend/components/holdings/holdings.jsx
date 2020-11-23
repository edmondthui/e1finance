import React from 'react';
import LoggedInNavBar from '../nav_bar/logged_in_nav_bar_container'
import { NavLink } from 'react-router-dom';
import DashboardFooter from '../portfolio/dashboard_footer'

class Holdings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
        }
    }

    componentDidMount() {
    }

    clickStock(idx) {
        
    }

    render() {
        return (
            <div>
                <LoggedInNavBar/>
                <div className="research-nav-bar">
                    <div className="research-nav-container">
                        <NavLink to="/dashboard" activeclass="active" className="research-nav-content">Portfolio</NavLink>
                        <NavLink exact to="/activity" activeclass="active" className="research-nav-content">Activity</NavLink>
                        <NavLink exact to="/holdings" activeclass="active" className="research-nav-content">Holdings</NavLink>
                    </div>
                </div>

                <DashboardFooter/>
            </div>
        )
    }
}

export default Holdings