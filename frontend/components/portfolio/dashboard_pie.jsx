import React from "react";
import LoggedInNavBar from "../nav_bar/logged_in_nav_bar_container";
import PortfolioPieIndex from "./pie_show_index_container";
import PortfolioInfo from "./pie_show_info_container";
import { Route, NavLink } from "react-router-dom";
import DashboardFooter from "./dashboard_footer";

class DashboardPie extends React.Component {
  render() {
    return (
      <div>
        <LoggedInNavBar />
        <div className="research-nav-bar">
          <div className="research-nav-container">
            <NavLink
              to="/dashboard"
              activeclass="active"
              className="research-nav-content"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/dashboard/activity"
              activeclass="active"
              className="research-nav-content"
            >
              Activity
            </NavLink>
            <NavLink
              to="/dashboard/holdings"
              activeclass="active"
              className="research-nav-content"
            >
              Holdings
            </NavLink>
          </div>
        </div>
        <Route
          path="/dashboard/:portfolioId/:pieId"
          component={PortfolioInfo}
        />
        <Route
          path="/dashboard/:portfolioId/:pieId"
          component={PortfolioPieIndex}
        />
        <DashboardFooter />
      </div>
    );
  }
}

export default DashboardPie;
