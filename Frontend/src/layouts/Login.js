import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      loggedIn: ''
    }
  }

  verify = async (obj1) =>{
    //console.log(obj1);
    const response = await axios.post('http://localhost:4000/user/login',{...obj1});
    console.log(response);
    const { token } = response.data;
    const org_type = response.data.data.org_type;
    localStorage.setItem('token', token);
    localStorage.setItem('org_type', org_type);
    if (response.data.token !== undefined) {
      this.props.history.push('/dashboard');
      this.setState({
        loggedIn: true
      })
    }
   
    //this.props.token(response.data.token);
  }

  render() {
    //const token = localStorage.getItem('token');
    if (this.state.loggedIn === true) {
        return(<Redirect to={{ pathname: '/dashboard' }}/>)
    }
    return (
      <div id="login-page">
      <div className="container">
          <div className="row justify-content-center align-self-center">
            <div className="col-lg-5 col-sm-12">
            <LoginForm verify={this.verify}/>
            <Footer/>
            </div>
            <div className="col-lg-5 offset-lg-1 col-sm-12">
              <img id="login-image" src="https://images.unsplash.com/photo-1579034963892-388c821d1d9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="108%"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
