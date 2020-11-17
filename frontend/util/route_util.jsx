import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

const Auth = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/dashboard" /> //change redirect to dashboard once its made
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Redirect to="/login" />: <Component {...props} /> //use protected route for all dashboard stuff
        }
    />
);


const mapStateToProps = state => {
    return { 
        loggedIn: Boolean(state.session.id) 
    };
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
