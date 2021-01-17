import React from 'react';
import './NavbarTO.css';

function NavbarTO() {
    return (
        <nav className="navbar navbar-expand-xl py-md-2">
           
        <h2 className="py-md-2"><strong>Block Trade</strong></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">

          <li className="nav-item py-md-2 px-3 ml-5">
            <a className="nav-link" href="/dashboardTO" active="true">Dashboard</a>
          </li>

          <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Schedule
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/cuaddtax">Ship loading</a>
            <a className="dropdown-item" href="/cuaddtax">Ship unloading</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/cuviewtax">All</a>
          </div>
        </li>

        <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Yard
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/ViewConsignmentsCu#">Add Yard</a>
            <a className="dropdown-item" href="/ViewConsignmentsCu">Assign Yard</a>
            <a className="dropdown-item" href="/ViewConsignmentsCu">View Yard</a>
          </div>
        </li>

        <li className="nav-item dropdown py-md-2 px-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Berth
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <a className="dropdown-item" href="/ViewConsignmentsCu#">Add Berth</a>
            <a className="dropdown-item" href="/ViewConsignmentsCu">View Berth</a>
          </div>
        </li>

        <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="/">Schedule Requests</a>
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
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </li>
        </ul>
        </div>
      </nav>
       
        
    )
}

export default NavbarTO;
