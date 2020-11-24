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
        this.props.fetchActivities();
        this.props.fetchStocks()
    }

    clickStock(name) {
        let idx = this.props.stocks.filter(stock => stock.stock_name === name)[0].id - 1
        this.props.history.push(`/research/stocks/${idx}`)
    }

    render() {
        let activity;
        if (this.props.activities.length > 0) {
            activity = this.props.activities.map((activity, idx )=> (
                <div className="portfolio-index-item" key={idx} onClick={() => this.clickStock(activity.name)}>
                    <div className = "stock-content">
                        <div className= "image-placeholder">Image</div>
                        <p>{activity.created_at}</p>
                        <div className = "stock-name">
                            
                            <p>{activity.activity}</p>
                            <p>{activity.name}</p>
                        </div>
                        <div className = "stock-research-price">
                            <p>{"$" + activity.value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                        </div>
                    </div>       
                </div>
            ))
        }
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
                <div className="research-index-container">
                    <div className="portfolio-index-header">
                        <p className="header-name">Activity</p>
                    </div>
                    {activity}
                </div>
                <DashboardFooter/>
            </div>
        )
    }
}

export default Holdings