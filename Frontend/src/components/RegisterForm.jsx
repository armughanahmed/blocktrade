import React from 'react';
import './Register.css';


const RegisterForm = () => {
  return (
                <div id="register-card" className="card w-125" style={{padding: 40}}>
                    <form>
                    <h3><strong>REGISTER</strong></h3><br/>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="Enter country" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Enter city" />
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Confirm password</label>
                            <input type="password" className="form-control" placeholder="Renter password" />
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sel1">Register as</label>
                        <select class="form-control" id="sel1">
                            <option>Ocean carrier</option>
                            <option>Port authority</option>
                            <option>Exporter</option>
                            <option>Importer</option>
                        </select>
                    </div> 
                    <div class="form-group">
                    <label for="comment">Office address:</label>
                    <textarea class="form-control" rows="3" id="comment"></textarea>
                    </div>
                    <p className="text-right">
                             <a href="/login">Already have an account?</a>
                        </p>
                        <div id="button">
                        <button type="submit">Register</button>
                        </div>
                        
                       
                    </form>
                </div>  

     
  )
};

export default RegisterForm;