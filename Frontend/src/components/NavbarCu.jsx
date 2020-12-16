import React from 'react';
import './NavbarCu.css';

function NavbarCu() {
    return (
        <nav className="navbar navbar-expand-xl py-md-2">
           
        <h2 className="py-md-2"><strong>Block Trade</strong></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">

          <li className="nav-item py-md-2 px-3 ml-5">
            <a className="nav-link" href="/dashboardCu" active>Dashboard</a>
          </li>

          <li class="nav-item dropdown py-md-2 px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tax
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a class="dropdown-item" href="#">Add tax</a>
            <a class="dropdown-item" href="#">View/Update tax</a>
          </div>
        </li>

        <li class="nav-item dropdown py-md-2 px-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shipment
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a class="dropdown-item" href="#">Upcoming</a>
            <a class="dropdown-item" href="#">Clearence pending</a>
            <a class="dropdown-item" href="#">Tax pending</a>
            <a class="dropdown-item" href="#">Cleared</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">All</a>
          </div>
        </li>

        </ul>

        <ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
             <i className="fa fa-user fa-lg"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Link 1</a>
              <a className="dropdown-item" href="#">Link 2</a>
              <a className="dropdown-item" href="#">Link 3</a>
            </div>
          </li>
        </ul>
        </div>
      </nav>
       
        
    )
}

export default NavbarCu;
