import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    console.log('🚀 ~ file: PrivateRoute.jsx ~ line 7 ~ PrivateRoute ~ auth', auth);
    return (
        <Route
            {...rest}
            render={(routerProps) =>
                auth.user ? children : <Redirect to={{ pathname: '/login' }} />
            }
        ></Route>
    );
};

export default PrivateRoute;
