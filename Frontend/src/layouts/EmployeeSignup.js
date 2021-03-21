import React, { PureComponent } from 'react'
import './EmployeeSignup.css'
import { createBrowserHistory } from "history";
import { withRouter,Redirect } from "react-router";
import axios from 'axios'

class EmployeeSignup extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            checkPassword: '',
            match: true,
            data: '',
            name: '',
            success: false,
            notVerified: false,
            serverError: false
        }
    }

   

    componentDidMount(){
        this.getToken();
    }

    async verifyUser(token){
        //const token = localStorage.getItem('token');
        // const obj = {
        //     token: token
        // }
        try{
            const response = await axios.get(`http://localhost:4000/user/invite/${token}`);
            console.log(response);

            // this.setState({
            //     email: response.data.data.result.receiver_email,
            //     data: response.data.data.result.decoded.result
            // })
           
        }
        catch(e){
            console.log(e.response);
        }
    }

    updatePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    updateName(event){
        this.setState({
            name: event.target.value
        })
    }

    updateCheckPassword(event){
        this.setState({
            checkPassword: event.target.value            
        })
    }

    matchPassword(){
        if(this.state.password === this.state.checkPassword){
            this.setState({
                match: true
            })
            return true;
        }
        else{
            this.setState({
                match: false
            })
            return false;
        }
    }


    getToken(){
        const hist = createBrowserHistory();
        let token = new URLSearchParams(hist.location.search).get('token');
        console.log(token);
        this.decodeToken(token)
        this.verifyUser(token)
    }
    async decodeToken(token){
        //const token = localStorage.getItem('token');
        const obj = {
            token: token
        }
        try{
            const response = await axios.post('http://localhost:4000/user/tokenDecode',obj);
            console.log(response.data.data);

            this.setState({
                email: response.data.data.result.receiver_email,
                data: response.data.data.result.decoded.result
            })
           
        }
        catch(e){
            console.log(e.response);
        }
    }

  
    async signup(event){
        event.preventDefault();
        //const token = localStorage.getItem('token');
        let result = this.matchPassword();
        console.log(result);
        if(result === true){
            //console.log('hello');
        const obj = {
            org_id: this.state.data.org_id,
            name: this.state.name,
            receiver_email: this.state.email,
            country: this.state.data.country,
            city: this.state.data.city,
            password: this.state.password,    
        }
        this.setState({
            success: false,
            notVerified: false,
            serverError: false
        })
        try{
            const response = await axios.post('http://localhost:4000/user/signup',obj);
            console.log(response);
            if(response.status === 201){
                this.setState({
                    success: true
                })
                setTimeout(function () {
                    this.props.history.push('/login');
                },2500)                
                // /this.redirecting();
            }
            else if(response.status === 404){
                this.setState({
                    notVerified: true
                })
            }
        }
        catch(e){
            if(e.response.status === 500){
               this.setState({
                serverError: true
               })       
            }
            console.log(e.response);
        }
     }
    }


    render() {
        return (
            <div className="container-fluid" id="invite-card">
                <div className="row justify-content-center align-self-center">
                    <div className="col-lg-4 offset-lg-1 ">
                        <div className="card">
                            <div className="card-body">
                                <form className="form-group" onSubmit={(e) => this.signup(e)}>
                                    <label>Email:</label>
                                    <input className="form-control" value={this.state.email} disabled/>
                                    <label>Name:</label>
                                    <input className="form-control" value={this.state.name} onChange={(e) => this.updateName(e)} type="text" />
                                    <label>Password:</label>
                                    <input className="form-control" value={this.state.password} onChange={(e) => this.updatePassword(e)} type="password"/>
                                    <label>Confirm password:</label>
                                    <input className="form-control" value={this.state.checkPassword} onChange={(e) => this.updateCheckPassword(e)} type="password" />
                                    
                                    {
                                        this.state.match === false&&
                                        <small id="password-matching">Password doesn't match!</small>
                                    }
                                    {
                                        this.state.success === true&&
                                        <small id="invite-register-success">Registeration sucessful!</small>
                                    }
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="col text-center">
                                            <button className="btn btn-custom" type="submit">Register</button>
                                        </div>
                                    </div>         
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <img id="login-image" src="https://images.unsplash.com/photo-1579034963892-388c821d1d9f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="100%"></img>
                    </div>       
                </div>
            </div>
        )
    }
}

export default withRouter(EmployeeSignup)

