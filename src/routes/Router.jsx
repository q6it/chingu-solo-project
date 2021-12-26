import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginRoute from './Login';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/layouts/AppLayout';

const Router = () => (
    <Switch>
        <Route path="/login" component={LoginRoute} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/">
            <Layout />
        </PrivateRoute>
    </Switch>
);

export default Router;
