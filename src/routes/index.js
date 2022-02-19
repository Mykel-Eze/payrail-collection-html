import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoutes from './privateRoute';
import GuestRoutes from './guestRoute';
import AuthView from '../layouts/AuthView';
import DashboardView from '../layouts/DashboardView';

const Routes = () => (
    <Switch>
        
        <PrivateRoutes path="/dashboard" component={DashboardView} />
        <GuestRoutes  path="/" component={AuthView}/>
    </Switch>
)

export default Routes;