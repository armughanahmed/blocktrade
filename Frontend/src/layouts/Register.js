import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

function Register() {
    return (
        <div id="register-page">
        <div className="container">
            <div className="row">
              <div className="col-lg-7 col-sm-12">
               <RegisterForm/>
                <Footer/>
              </div>
              <div className="col-lg-5 col-sm-12">
                <img id="register-image" src="https://images.unsplash.com/photo-1561702469-c4239ced3f47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80" height="110%" width="150%"></img>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Register
