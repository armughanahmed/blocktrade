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


import ProtectedRoute from './ProtectedRoute';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import AddPartner from './layouts/AddPartner';

import DashboardCO from './layouts/cargoOwner/DashboardCO';
import StartConsignmentCO from './layouts/cargoOwner/StartConsignmentCO';
import ViewConsignmentsCO from './layouts/cargoOwner/ViewConsignmentsCO';
import TrackConsignment from './layouts/cargoOwner/TrackConsignment';
import ViewQuotations from './layouts/cargoOwner/ViewQuotations';

import DashboardSC from './layouts/shippingCompany/Dashboard';
import CreateShipment from './layouts/shippingCompany/CreateShipment';
import Track from './layouts/shippingCompany/Track';
import ViewShipments from './layouts/shippingCompany/ViewShipments';
import BookContainer from './layouts/shippingCompany/BookContainer';

import DashboardFI from './layouts/FI/DashboardFI';
import LCPrevious from './layouts/FI/LCPrevious';
import LCRequests from './layouts/FI/LCRequests';
import LCSearch from './layouts/FI/LCSearch';

import DashboardCu from './layouts/customs/DashboardCu';
import CuSearch from './layouts/customs/CuSearch';
import ViewConsignmentsCu from './layouts/customs/ViewConsignmentsCu';
import CuAddTax from './layouts/customs/CuAddTax';
import CuViewTax from './layouts/customs/CuViewTax';
import CuAssignTax from './layouts/customs/CuAssignTax';
import CuAllow from './layouts/customs/CuAllow';

import DashboardTO from './layouts/TO/DashboardTO';
import TOAddBerth from './layouts/TO/TOAddBerth';
import TOAddYard from './layouts/TO/TOAddYard';
import TOAssignYard from './layouts/TO/TOAssignYard';
import TOSearch from './layouts/TO/TOSearch';
import TOViewAllSch from './layouts/TO/TOViewAllSch';
import TOViewBerth from './layouts/TO/TOViewBerth';
import TOViewLoading from './layouts/TO/TOViewLoading';
import TOViewSchReq from './layouts/TO/TOViewSchReq';
import TOViewUnloading from './layouts/TO/TOViewUnloading';
import TOViewYard from './layouts/TO/TOViewYard';




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

              <PrivateRoute path="/dashboardCO" component={DashboardCO}/>
              <PrivateRoute path="/startConsignment" component={StartConsignmentCO}/>
              <PrivateRoute path="/viewConsignments" component={ViewConsignmentsCO}/>
              <PrivateRoute path="/trackConsignment" component={TrackConsignment}/>
              <PrivateRoute path="/viewQuotations" component={ViewQuotations}/>
              <PrivateRoute path="/addPartner" component={AddPartner}/>

              <PrivateRoute path="/dashboardSc" component={DashboardSC}/>
              <PrivateRoute path="/createShipment" component={CreateShipment}/>
              <PrivateRoute path="/track" component={Track}/>
              <PrivateRoute path="/viewShipments" component={ViewShipments}/>
              <PrivateRoute path="/bookContainer" component={BookContainer}/>

              <PrivateRoute path="/dashboardFI" component={DashboardFI}/>
              <PrivateRoute path="/lcPrevious" component={LCPrevious}/>
              <PrivateRoute path="/lcRequests" component={LCRequests}/>
              <PrivateRoute path="/lcSearch" component={LCSearch}/>

              
              <PrivateRoute path="/dashboardCu" component={DashboardCu}/>
              <PrivateRoute path="/cuSearch" component={CuSearch}/>
              <PrivateRoute path="/viewConsignmentsCu" component={ViewConsignmentsCu}/>
              <PrivateRoute path="/cuaddtax" component={CuAddTax}/>
              <PrivateRoute path="/cuviewtax" component={CuViewTax}/>
              <PrivateRoute path="/cuassigntax" component={CuAssignTax}/>
              <PrivateRoute path="/cuallow" component={CuAllow}/>

              
              <PrivateRoute path="/dashboardTO" component={DashboardTO}/>
              <PrivateRoute path="/TOAddBerth" component={TOAddBerth}/>
              <PrivateRoute path="/TOAddYard" component={TOAddYard}/>
              <PrivateRoute path="/TOAssignYard" component={TOAssignYard}/>
              <PrivateRoute path="/TOSearch" component={TOSearch}/>
              <PrivateRoute path="/TOViewAllSch" component={TOViewAllSch}/>
              <PrivateRoute path="/TOViewBerth" component={TOViewBerth}/>
              <PrivateRoute path="/TOViewLoading" component={TOViewLoading}/>
              <PrivateRoute path="/TOViewSchReq" component={TOViewSchReq}/>
              <PrivateRoute path="/TOViewUnloading" component={TOViewUnloading}/>
              <PrivateRoute path="/TOViewYard" component={TOViewYard}/>
              
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
     
    )
  }
}

export default App
