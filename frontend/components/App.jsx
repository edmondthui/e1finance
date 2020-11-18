import React from "react";
import SplashPage from './splash_page/splash_page'
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_container'
import SignupFormContainer from './session/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Dashboard from './portfolio/dashboard'

const App = () => (
  <div>
    <Route exact path="/" component={SplashPage} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute exact path="/dashboard/:portfolioId" component={Dashboard} />
    {/* <ProtectedRoute exact path="/dashboard/portfolioId" component={Dashboard} /> */}
    {/* <ProtectedRoute exact path="/dashboard/portfolioId/pieId" component={Dashboard} /> */}
  </div>
);

export default App;