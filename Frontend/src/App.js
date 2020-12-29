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

import Dashboard from './layouts/shippingCompany/Dashboard';
import CreateShipment from './layouts/shippingCompany/CreateShipment';
import Track from './layouts/shippingCompany/Track';
import ViewShipments from './layouts/shippingCompany/ViewShipments';
import BookContainer from './layouts/shippingCompany/BookContainer';
import ViewContainers from './layouts/shippingCompany/ViewContainers';
import MakeQuotations from './layouts/shippingCompany/MakeQuotations';
import AddPartner from './layouts/cargoOwner/AddPartner';
import AddPartnerSc from './layouts/shippingCompany/AddPartnerSc';
import PartnerRequests from './layouts/cargoOwner/PartnerRequests';
import ViewPartner from './layouts/cargoOwner/ViewPartner';
import DashboardOC from './layouts/oceanCarrier/DashboardOC';
import CreateSchedule from './layouts/oceanCarrier/CreateSchedule';
import AddShip from './layouts/oceanCarrier/AddShip';
import ViewShips from './layouts/oceanCarrier/ViewShips';
import AddContainer from './layouts/oceanCarrier/AddContainer';
import ViewContainersOC from './layouts/oceanCarrier/ViewContainersOC';






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
              <PrivateRoute path="/addPartnerCO" component={AddPartner}/>
              <PrivateRoute path="/requestsCO" component={PartnerRequests}/>
              <PrivateRoute path="/viewPartnerCO" component={ViewPartner}/>
              <PrivateRoute path="/addPartnerSc" component={AddPartnerSc}/>
              //shippingCompany
              <PrivateRoute path="/dashboardSc" component={Dashboard}/>
              <PrivateRoute path="/createShipment" component={CreateShipment}/>
              <PrivateRoute path="/track" component={Track}/>
              <PrivateRoute path="/viewShipments" component={ViewShipments}/>
              <PrivateRoute path="/bookContainer" component={BookContainer}/>
              <PrivateRoute path="/viewContainer" component={ViewContainers}/>
              <PrivateRoute path="/makeQuotation" component={MakeQuotations}/>
              //oceanCarrier
              <PrivateRoute path="/dashboardOc" component={DashboardOC}/>
              <PrivateRoute path="/createSchedule" component={CreateSchedule}/>
              <PrivateRoute path="/addShip" component={AddShip}/>
              <PrivateRoute path="/viewShip" component={ViewShips}/>
              <PrivateRoute path="/addContainer" component={AddContainer}/>
              <PrivateRoute path="/viewContainerOC" component={ViewContainersOC}/>
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
     
    )
  }
}

export default App
