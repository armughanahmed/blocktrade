import React, { PureComponent } from 'react'

class NavbarSC extends PureComponent {
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
          <a className="nav-link" href="/dashboard" active>Dashboard</a>
        </li>
        <li class="nav-item dropdown py-md-2 px-3 ml-4">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Shipments</a>
                  <div class="dropdown-menu">
                      <a href="startConsignment" class="dropdown-item">Create</a>
                      <a href="/viewConsignments" class="dropdown-item">View</a>
                      <a href="/trackConsignment" class="dropdown-item">Track</a>
                  </div>
          </li>
        <li className="nav-item py-md-2 px-3">
          <a className="nav-link" href="/viewQuotations">Quotations</a>
        </li>
        <li class="nav-item dropdown py-md-2 px-3 ml-3">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Containers</a>
                  <div class="dropdown-menu">
                      <a href="/addPartnerCO" class="dropdown-item">Book</a>
                      <a href="/requestsCO" class="dropdown-item">View</a>
                  </div>
          </li>
          <li className="nav-item py-md-2 px-3">
          <a className="nav-link" href="/viewQuotations">Add remove ocean carrier</a>
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

export default NavbarSC