import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {
      obj: ''
    }
  }

  formInput = (obj1) =>{
   console.log(obj1);
    this.setState({
      obj:obj1
    })  
    this.registerUser(obj1);
  }
  
  async registerUser(obj1){
   try{ 
    //console.log('armu' +obj1);
   const response = await axios.post('http://localhost:4000/organization',obj1)
    console.log(response);
    if (response.data.success === 1) {
      // alert('helloo');
     this.props.history.push('/login');
      }
  }
   catch(e){
    console.log(e);
   }  
  }

  render() {
    return (
      <div id="register-page">
      <div className="container">
          <div className="row">
          <div className="col-lg-7 col-sm-12">
              <RegisterForm formInput={this.formInput}/>
              </div>
            <div className=" offset-lg-1 col-lg-5 col-sm-12">
              <img id="register-image" src="https://images.unsplash.com/photo-1579034963892-388c821d1d9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="100%" width="150%"></img>
            </div>
            </div>
          </div>
        </div>
    
    )
  }
}

export default Register