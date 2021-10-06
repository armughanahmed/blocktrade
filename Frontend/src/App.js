import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { createBrowserHistory } from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './layouts/Register';
import Login from './layouts/Login';
import DashboardCO from './layouts/cargoOwner/DashboardCO';
import StartConsignmentCO from './layouts/cargoOwner/StartConsignmentCO';
import ViewConsignmentsCO from './layouts/cargoOwner/ViewConsignmentsCO';
import TrackConsignment from './layouts/cargoOwner/TrackConsignment';
import ProtectedRoute from './ProtectedRoute';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ViewQuotations from './layouts/cargoOwner/ViewQuotations';

class App extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const hist = createBrowserHistory();
    const org_type = localStorage.getItem('org_type');
    return (
      <Router history={hist}>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <ProtectedRoute path="/dashboard" component={DashboardCO}/>,
        <ProtectedRoute path="/startConsignment" component={StartConsignmentCO}/>
        <ProtectedRoute path="/viewConsignments" component={ViewConsignmentsCO}/>
        <ProtectedRoute path="/trackConsignment" component={TrackConsignment}/>
        <ProtectedRoute path="/viewQuotations" component={ViewQuotations}/>
      </Switch>
</Router>
    )
  }
}

export default App
