import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Login.css';

class LoginForm extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    updatePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    validate(event){
        event.preventDefault();
        const obj = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.verify(obj);
    }

    render() {
        return (
            <div id="login-card" className="card">
            <form action="#" onSubmit={(e) => this.validate(e)}>
            <h3><strong>Login</strong></h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={(e) => this.updateEmail(e)} placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} placeholder="Enter password" onChange={(e) => this.updatePassword(e)} required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div id="button">
                <button type="submit">Sign in</button>
                </div>
                
                <p className="forgot-password text-right">
                     <a href="/register">Forgot password?</a>
                </p>
                <p className="forgot-password text-right">
                     <a href="/register">Don't have an account?</a>
                </p>
            </form>
        </div>  
        )
    }
}

export default LoginForm