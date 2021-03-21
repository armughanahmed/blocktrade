import React, { PureComponent } from 'react'

class NavbarFI extends PureComponent {
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
            <a className="nav-link" href="/dashboardFI" active>Dashboard</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="/lcPrevious">Previous LCs</a>
          </li>
          <li className="nav-item py-md-2 px-3">
            <a className="nav-link" href="/lcRequests">Requests LCs</a>
          </li>
          <li class="nav-item dropdown py-md-2 px-3 ml-3">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Partner</a>
                  <div class="dropdown-menu">
                      <a href="/addPartner" class="dropdown-item">Add</a>
                      <a href="/requests" class="dropdown-item">Pending requests</a>
                      <a href="/viewPartner" class="dropdown-item">View</a>
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

export default NavbarFI