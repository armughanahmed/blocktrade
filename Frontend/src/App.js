import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

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

function App() {
  return (  
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={DashboardCO}/>
          <Route path="/startConsignment" component={StartConsignmentCO}/>
          <Route path="/viewConsignments" component={ViewConsignmentsCO}/>
      </Switch>
    </Router>
  );
}

export default App;
