import React, { PureComponent } from 'react'

class NavbarAdmin extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-xl py-md-2">
           
            <h2 className="py-md-2"><strong>Block Trade</strong></h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
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

export default NavbarAdmin