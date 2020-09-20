import React from 'react'
import {Redirect,Route} from 'react-router-dom' ; 
const PrivateRoute = ({component: Component, ...rest}) => {
    let token = localStorage.getItem('token') ; 
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute
