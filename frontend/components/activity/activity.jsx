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
                        <NavLink exact to="/dashboard" activeclass="active" className="research-nav-content">Portfolio</NavLink>
                        <NavLink to="/dashboard/activity" activeclass="active" className="research-nav-content">Activity</NavLink>
                        <NavLink to="/dashboard/holdings" activeclass="active" className="research-nav-content">Holdings</NavLink>
                    </div>
                </div>

                <DashboardFooter/>
            </div>
        )
    }
}

export default Holdings