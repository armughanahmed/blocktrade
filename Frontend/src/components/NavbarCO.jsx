import React from 'react';
import './NavbarCO.css';

function NavbarCO() {
    return (
        <nav className="navbar navbar-expand-lg py-md-2">
           
        <h2 className="py-md-2"><strong>Block Trade</strong></h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item py-md-2 px-3 ml-5">
            <a className="nav-link" href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="startConsignment">Create consignment</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="/viewConsignments">Consignments</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="/trackConsignment">Track consignments</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="#">Quotations</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="#">Add partner</a>
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

export default NavbarCO;
