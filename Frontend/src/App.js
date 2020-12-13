import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { createBrowserHistory } from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
import AddPartner from './layouts/AddPartner';
import Dashboard from './layouts/shippingCompany/Dashboard';
import CreateShipment from './layouts/shippingCompany/CreateShipment';
import Track from './layouts/shippingCompany/Track';
import ViewShipments from './layouts/shippingCompany/ViewShipments';
import BookContainer from './layouts/shippingCompany/BookContainer';






const checkSignIn = () =>{
  const isAuthenticated = localStorage.getItem('token');
  if (isAuthenticated === null || isAuthenticated === undefined) {
      return false;
  }
  else{
    return true;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    checkSignIn() ?
      <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

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
      <div className="page-container">
        <div className="container-wrap">
          <Router history={hist}>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <PrivateRoute path="/dashboard" component={DashboardCO}/>
              <PrivateRoute path="/startConsignment" component={StartConsignmentCO}/>
              <PrivateRoute path="/viewConsignments" component={ViewConsignmentsCO}/>
              <PrivateRoute path="/trackConsignment" component={TrackConsignment}/>
              <PrivateRoute path="/viewQuotations" component={ViewQuotations}/>
              <PrivateRoute path="/addPartner" component={AddPartner}/>
              <PrivateRoute path="/dashboardSc" component={Dashboard}/>
              <PrivateRoute path="/createShipment" component={CreateShipment}/>
              <PrivateRoute path="/track" component={Track}/>
              <PrivateRoute path="/viewShipments" component={ViewShipments}/>
              <PrivateRoute path="/bookContainer" component={BookContainer}/>
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
     
    )
  }
}

export default App
