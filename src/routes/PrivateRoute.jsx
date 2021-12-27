import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jsCookie from 'js-cookie';

const PrivateRoute = ({ children, ...rest }) => {
    const token = jsCookie.get('token') || null;
    return (
        <Route
            {...rest}
            render={() => (token ? children : <Redirect to={{ pathname: '/login' }} />)}
        ></Route>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PrivateRoute;
