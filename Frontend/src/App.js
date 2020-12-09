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


    

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class App extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const hist = createBrowserHistory();
    return (
      <Router history={hist}>
      <Switch>
        <Route path="/login" component={Login} token={this.token}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={DashboardCO}/>
        <Route path="/startConsignment" component={StartConsignmentCO}/>
        <Route path="/viewConsignments" component={ViewConsignmentsCO}/>
        <Route path="/trackConsignment" component={TrackConsignment}/>
      </Switch>
</Router>
    )
  }
}

export default App
