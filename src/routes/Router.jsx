import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginRoute from './Login';
import Layout from '../components/layouts/AppLayout';

const Router = () => (
    <Switch>
        <Route path="/login">
            <LoginRoute />
        </Route>
        <Route path="/" component={Layout} />
    </Switch>
);

export default Router;
