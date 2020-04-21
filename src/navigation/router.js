import React from 'react';
import { Route, Redirect,Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux';
import asyncComponent from '../utils/asyncFunc';


const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    
    <Route
        {...rest}
        render={props =>
            isLoggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: process.env.PUBLIC_URL + '/',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

const PublicRoutes = ({ history, isLoggedIn }) => {
    
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route
                    exact
                    path={process.env.PUBLIC_URL + '/'}
                    component={asyncComponent(() => import("../features/login/index"))}
                />
                  <Route
                    path={process.env.PUBLIC_URL + '/register'}
                    component={asyncComponent(() => import("../features/register/index"))}
                />
                <RestrictedRoute
                    path='/app'
                    component={asyncComponent(() => import("../features/layout/index"))}
                    isLoggedIn={isLoggedIn}
                />
            </Switch>
        </ConnectedRouter>
    );
    
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}


export default connect(mapStateToProps)(PublicRoutes);