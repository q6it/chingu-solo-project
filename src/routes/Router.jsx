import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginRoute from './Login';
import PrivateRoute from './PrivateRoute';
import Layout from '../components/layouts/AppLayout';

const Router = () => (
    <Switch>
        <Route path="/login" component={LoginRoute} />
        <PrivateRoute path="/">
            <Layout />
        </PrivateRoute>
        {/* <Route path="/" component={Layout} /> */}
    </Switch>
);

export default Router;
