import React, { PureComponent } from 'react'
import './NavbarIT.css';

class NavbarIT extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  logout(){
    localStorage.setItem('token','');
    localStorage.setItem('org_type','');
  }

  render() {
      return (
        <nav className="navbar navbar-expand-xl py-md-2">
           
        <h2 className="py-md-2"><strong>Block Trade</strong></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">

          <li className="nav-item py-md-2 px-3 ml-5">
            <a className="nav-link" href="/dashboardIT" active="true">Dashboard</a>
          </li>

          <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="/dashboardIT" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Vehicle
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/itaddvehicle">Add Vehicle</a>
            <a className="dropdown-item" href="/dashboardIT">View Vehicles</a>
          </div>
        </li>


        <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="/dashboardIT" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Route
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/itaddroute">Add Route</a>
            <a className="dropdown-item" href="/dashboardIT">View/Update Routes</a>
          </div>
        </li>


        <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="/dashboardIT" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shipment
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/itViewShipment">Upcoming</a>
            <a className="dropdown-item" href="/itViewShipment">Pending</a>
            <a className="dropdown-item" href="/itViewShipment">In progress</a>
            <a className="dropdown-item" href="/itViewShipment">Completed</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/itViewShipment">All</a>
          </div>
        </li>

        <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Partners
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/dashboardIT">Add partner</a>
            <a className="dropdown-item" href="/dashboardIT">View partners</a>
          </div>
        </li>




        </ul>





        <ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
             <i className="fa fa-user fa-lg"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="/login" onClick={this.logout}>Logout</a>
            </div>
          </li>
        </ul>
        </div>
      </nav>
       
        
    )
  }
}

export default NavbarIT
