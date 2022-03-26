import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Register.css';

class RegisterForm extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
           
                name: '',
                type: '',
                email: '',
                password: '',
                country: '',
                city: '',
                officeAddress: '',
                zipCode:'',
                phoneNumber:'',
                ntn:''
          
        }
        this.sendData = this.sendData.bind(this);
    }
    updateNTN(event){
        this.setState({
            ntn: event.target.value,
        })
    }
    updatePhoneNumber(event){
        this.setState({
            phoneNumber: event.target.value,
        })
    }

    updateZipCode(event){
        this.setState({
            zipCode: event.target.value,
        })
    }

    updateName(event){
        this.setState({
            name: event.target.value
        })
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

    updateType(event){
        this.setState({
            type: event.target.value
        })
    }

    updateCountry(event){
        this.setState({
            country: event.target.value
        })
    }

    updateCity(event){
        this.setState({
            city: event.target.value
        })
    }

    updateOfficeAddress(event){
        this.setState({
            officeAddress: event.target.value
        })
    }

    sendData(event){
        
        event.preventDefault();
        //alert('hello');
        const obj1 = {
            name: this.state.name,
            type: this.state.type,
            email: this.state.email,
            password: this.state.password,
            country: this.state.country,
            city: this.state.city,
            officeAddress: this.state.officeAddress,
            zipCode: this.state.zipCode,
            phoneNumber: this.state.phoneNumber,
            NTN: this.state.ntn
        }
        //console.log(obj1);
        this.props.formInput(obj1);
    }

    render() {
        return (
            <div id="register-card" className="card" style={{padding: 40}}>
            <form action="#" onSubmit={(e) =>this.sendData(e)}>
            <h3><strong>Register</strong></h3><br/>
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={this.state.name}  onChange={(e) => this.updateName(e)} required/>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email}  onChange={(e) => this.updateEmail(e)} required/>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={(e) => this.updatePassword(e)} required/>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" className="form-control" placeholder="Renter password" />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter country" value={this.state.country} onChange={(e) => this.updateCountry(e)} required/>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter city" value={this.state.city} onChange={(e) => this.updateCity(e)} required/>
                </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <label>NTN</label>
                    <input type="text" className="form-control" placeholder="Enter NTN" value={this.state.ntn} onChange={(e) => this.updateNTN(e)} required/>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Zip-code</label>
                    <input type="text" className="form-control" placeholder="Enter zip code" value={this.state.zipCode} onChange={(e) => this.updateZipCode(e)} required/>
                </div>
                </div>
            </div>

            
            <div className="row">
                <div className="col-lg-6">
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="text" className="form-control" placeholder="Enter your phone number" value={this.state.phoneNumber} onChange={(e) => this.updatePhoneNumber(e)} required/>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                <label for="sel1">Register as</label>
                <select className="form-control" value={this.state.type}  onChange={(e) => this.updateType(e)} id="sel1">
                    <option value="">Select type</option>
                    
                    <option value="cargo-owner">Cargo owner</option>
                    <option value="customs">Customs</option>
                    <option value="financial-institution">Financial Institution</option>
                    <option value="inland-transporter">Inland Transporter</option>
                    <option value="ocean-carrier">Ocean carrier</option>
                    <option value="shipping-company">Shipping company</option>
                    <option value="terminal-operator">Terminal Operator</option>
                </select>
                </div>
                </div>
            </div>



            <div className="form-group">
                
            </div> 
            <div className="form-group">
            <label for="comment">Office address:</label>
            <textarea className="form-control" rows="3" id="comment" value={this.state.officeAddress} onChange={(e) => this.updateOfficeAddress(e)} required></textarea>
            </div>
            <p className="text-right">
                     <a href="/login">Already have an account?</a>
                </p>
                <div id="button">
                <button type="submit" className="btn btn-primary">Register</button>
                </div>
                
               
            </form>
        </div>    
        )
    }
}

export default RegisterForm