import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
      
                    <div id="login-card" className="card">
                        <form>
                        <h3><strong>LOGIN</strong></h3>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
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
};

export default LoginForm;