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


import DashboardIT from './layouts/inlandT/DashboardIT';
import ITSearch from './layouts/inlandT/ITSearch';
import ITShipment from './layouts/inlandT/ITViewShipment';
import ITAddRoute from './layouts/inlandT/ITAddRoute';
import Error from './layouts/Error';
import ITAddVehicle from './layouts/inlandT/ITAddVehicle';
import AddEmployee from './layouts/AddEmployee';

import AdminLogin from './layouts/Admin/Login';
import Home from './layouts/Admin/Home';
import Invite from './layouts/Invite';
import EmployeeSignup from './layouts/EmployeeSignup';
import PendingConfirmation from './layouts/oceanCarrier/PendingConfirmation';
import AssignSchedule from './layouts/shippingCompany/AssignSchedule';


class App extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  

  render() {

    const checkSignIn = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (isAuthenticated === null || isAuthenticated === undefined || isAuthenticated === '') {
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

    const checkCargoOwner = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'cargo-owner') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const CargoOwner = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkCargoOwner() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )
    
    const checkShippingCompany = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'shipping-company') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const ShippingCompany = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkShippingCompany() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkOceanCarrier = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'ocean-carrier') {
          return false;
      }
      else{
        console.log(org_type);
        return true;
      }
    }
    
    const OceanCarrier = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkOceanCarrier() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkFinancialInstitution = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'financial-institution') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const FinancialInstitution = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkFinancialInstitution() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkCustom = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'customs') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const Custom = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkCustom() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkTerminalOperator = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'terminal-operator') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const TerminalOperator = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkTerminalOperator() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkInlandTransporter = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'inland-transporter') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const InlandTransporter = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkInlandTransporter() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const checkAdmin = () =>{
      const isAuthenticated = localStorage.getItem('token');
      const org_type = localStorage.getItem('org_type');
      if (org_type !== 'moderator') {
          return false;
      }
      else{
        return true;
      }
    }
    
    const Admin = ({ component: Component, ...rest }) => (
    
      <Route {...rest} render={(props) => (
        checkAdmin() ?
          <Component {...props} />
          : <Redirect to='/error' />
      )} />
    )

    const hist = createBrowserHistory();
    const org_type = localStorage.getItem('org_type');
    return (
      <div className="page-container">
        <div className="container-wrap">
          <Router history={hist}>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/admin" component={AdminLogin} />
              <Route path="/error" component={Error} />
              <Route path="/addEmployee" component={AddEmployee} />
              <CargoOwner path="/dashboard" component={DashboardCO}/>
              <CargoOwner path="/startConsignment" component={StartConsignmentCO}/>
              <CargoOwner path="/viewConsignments" component={ViewConsignmentsCO}/>
              <CargoOwner path="/trackConsignment" component={TrackConsignment}/>
              <CargoOwner path="/viewQuotations" component={ViewQuotations}/>
              <Route path="/addPartner" component={AddPartner}/>
              <Route path="/requests" component={PartnerRequests}/>
              <Route path="/viewPartner" component={ViewPartner}/>
              <ShippingCompany path="/addPartnerSc" component={AddPartnerSc}/>
              //shippingCompany
              <ShippingCompany path="/dashboardSc" component={Dashboard}/>
              <ShippingCompany path="/createShipment" component={CreateShipment}/>
              <ShippingCompany path="/track" component={Track}/>
              <ShippingCompany path="/viewShipments" component={ViewShipments}/>
              <ShippingCompany path="/bookContainer" component={BookContainer}/>
              <ShippingCompany path="/viewContainer" component={ViewContainers}/>
              <ShippingCompany path="/makeQuotation" component={MakeQuotations}/>
              <ShippingCompany path="/assignSchedule" component={AssignSchedule}/>
              //oceanCarrier
              <OceanCarrier path="/dashboardOc" component={DashboardOC}/>
              <OceanCarrier path="/createSchedule" component={CreateSchedule}/>
              <OceanCarrier path="/addShip" component={AddShip}/>
              <OceanCarrier path="/viewShip" component={ViewShips}/>
              <OceanCarrier path="/addContainer" component={AddContainer}/>
              <OceanCarrier path="/viewContainerOC" component={ViewContainersOC}/>
              <OceanCarrier path="/pendingConfirmation" component={PendingConfirmation}/>
            
              <FinancialInstitution path="/dashboardFI" component={DashboardFI}/>
              <FinancialInstitution path="/lcPrevious" component={LCPrevious}/>
              <FinancialInstitution path="/lcRequests" component={LCRequests}/>
              <FinancialInstitution path="/lcSearch" component={LCSearch}/>

              
              <Custom path="/dashboardCu" component={DashboardCu}/>
              <Custom path="/cuSearch" component={CuSearch}/>
              <Custom path="/viewConsignmentsCu" component={ViewConsignmentsCu}/>
              <Custom path="/cuaddtax" component={CuAddTax}/>
              <Custom path="/cuviewtax" component={CuViewTax}/>
              <Custom path="/cuassigntax" component={CuAssignTax}/>
              <Custom path="/cuallow" component={CuAllow}/>

              
              <TerminalOperator path="/dashboardTO" component={DashboardTO}/>
              <TerminalOperator path="/TOAddBerth" component={TOAddBerth}/>
              <TerminalOperator path="/TOAddYard" component={TOAddYard}/>
              <TerminalOperator path="/TOAssignYard" component={TOAssignYard}/>
              <TerminalOperator path="/TOSearch" component={TOSearch}/>
              <TerminalOperator path="/TOViewAllSch" component={TOViewAllSch}/>
              <TerminalOperator path="/TOViewBerth" component={TOViewBerth}/>
              <TerminalOperator path="/TOViewLoading" component={TOViewLoading}/>
              <TerminalOperator path="/TOViewSchReq" component={TOViewSchReq}/>
              <TerminalOperator path="/TOViewUnloading" component={TOViewUnloading}/>
              <TerminalOperator path="/TOViewYard" component={TOViewYard}/>
              

              
              <InlandTransporter path="/dashboardIT" component={DashboardIT}/>
              <InlandTransporter path="/itSearch" component={ITSearch}/>
              <InlandTransporter path="/itViewShipment" component={ITShipment}/>
              <InlandTransporter path="/itaddroute" component={ITAddRoute}/>
              <InlandTransporter path="/itaddvehicle" component={ITAddVehicle}/>

              <Admin path='/home' component={Home} />

              <Route path='/invite' component={Invite} />
              <Route path='/signup' component={EmployeeSignup} />
            </Switch>
          </Router>
        </div>
        <Footer/>
      </div>
     
    )
  }
}

export default App
