import React from 'react'
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
function Login() {
    return (
        <div id="login-page">
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
              <LoginForm/>
              <Footer/>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img id="login-image" src="https://images.unsplash.com/photo-1579034963892-388c821d1d9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="106%"></img>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Login
