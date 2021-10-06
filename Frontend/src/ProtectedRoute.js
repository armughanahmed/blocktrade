import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import DashboardCO from './layouts/cargoOwner/DashboardCO';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token');
        
        return isAuthenticated !== null  || isAuthenticated !== undefined || isAuthenticated !== '' ?  (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;