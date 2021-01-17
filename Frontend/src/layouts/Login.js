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
    this.loginForm = React.createRef();

    this.state = {
      loggedIn: '',
      invalid: false,
      exist: true,
    }
  }

  verify = async (obj1) =>{
    //console.log(obj1);
    
    try{
      const response = await axios.post('http://localhost:4000/user/login',{...obj1});
      console.log(response.status);

      
      
      if (response.data.token !== undefined) {
        const { token } = response.data;
      const org_type = response.data.data.org_type;
      localStorage.setItem('token', token);
      localStorage.setItem('org_type', org_type);
        if(org_type === 'cargo-owner'){
          this.props.history.push('/dashboard');
        }
        else if(org_type === 'shipping-company'){
          this.props.history.push('/dashboardSc');
        }
        else if(org_type === 'ocean-carrier'){
          this.props.history.push('/dashboardOc');
        }
        else if(org_type === 'financial-institution'){
          this.props.history.push('/dashboardFI');
        }
        else if(org_type === 'custom'){
          this.props.history.push('/dashboardCu');
        }
        else if(org_type === 'terminal-operator'){
          this.props.history.push('/dashboardTO');
        }
        else if(org_type === 'inland-transporter'){
          this.props.history.push('/dashboardIT');
        }
        this.setState({
          loggedIn: true
        })
      }
    }
    catch(e){
      if(e.response.status === 400){
        this.loginForm.current.invalid();
      }

      else if(e.response.status === 403){
        this.loginForm.current.exists();
      }
      console.log(e.response);
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
            <LoginForm verify={this.verify} ref={this.loginForm}/>
             
            </div>
            <div className="col-lg-5 offset-lg-1 col-sm-12">
              <img id="login-image" src="https://images.unsplash.com/photo-1579034963892-388c821d1d9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="100%"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
