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
import DashboardCO from './layouts/DashboardCO';

function App() {
  return (  
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={DashboardCO}/>
      </Switch>
    </Router>
  );
}

export default App;
