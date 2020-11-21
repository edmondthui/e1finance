import React from "react";
import SplashPage from './splash_page/splash_page'
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_container'
import SignupFormContainer from './session/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Dashboard from './portfolio/dashboard'
import DashboardPortfolio from './portfolio/dashboard_portfolio'
import DashboardPie from './portfolio/dashboard_pie'
import DashboardStock from './portfolio/dashboard_stock'
import Research from './research/research_container'
import Stocks from './research/stocks_container'
import StockShow from './research/stock_show'
import Modal from './modal/modal'

const App = () => (
  <div>
    <Modal />
    <Route exact path="/" component={SplashPage} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/dashboard/:portfolioId" component={DashboardPortfolio} />
    <ProtectedRoute exact path="/dashboard/:portfolioId/:pieId" component={DashboardPie} />
    <ProtectedRoute exact path="/dashboard/:portfolioId/:pieId/:stockId" component={DashboardStock} />
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute exact path="/research" component={Research} />
    <ProtectedRoute exact path="/research/stocks" component={Stocks} />
    <ProtectedRoute exact path="/research/stocks/:stockId" component={StockShow} />
  </div>
);

export default App;