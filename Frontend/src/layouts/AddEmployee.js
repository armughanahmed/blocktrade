import React, { PureComponent } from 'react'
import './AddEmployee.css';
import NavbarCO from '../components/NavbarCO';
import NavbarIT from '../components/NavbarIT';
import NavbarCu from '../components/NavbarCu';
import NavbarFI from '../components/NavbarFI';
import NavbarOC from '../components/NavbarOC';
import NavbarSC from '../components/NavbarSC';
import NavbarTO from '../components/NavbarTO';
import axios from 'axios';

class AddEmployee extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: ''
        }
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    async add(){
        const token = localStorage.getItem('token');
        const obj = {
            receiver_email: this.state.email
        }
        try{
            const response = await axios.post('http://localhost:4000/user',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
            })
            console.log(response);
        }
        catch(e){
            console.log(e.response)
        }
    }

    showNav(){
        const type = localStorage.getItem('org_type');
        if (type === 'cargo-owner') {
            return(
                <NavbarCO/>
            )
        }
        else if (type === 'ocean-carrier') {
            return(
                <NavbarOC/>
            )
        }
        else if (type === 'shipping-company') {
            return(
                <NavbarSC/>
            )
        }
        else if (type === 'terminal-operator') {
            return(
                <NavbarTO/>
            )
        }
        else if (type === 'financial-institution') {
            return(
                <NavbarFI/>
            )
        }
        else if (type === 'customs') {
            return(
                <NavbarCu/>
            )
        }
        else if (type === 'inland-transporter') {
            return(
                <NavbarIT/>
            )
        }
    }

    render() {
        return (
            <div className="wrapper">
                {
                    this.showNav()
                }
                <div className="container" id="add-employee">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input className="form-control" value={this.state.email} onChange={(e) => this.updateEmail(e)} type="email" placeholder="Enter email" />
                                    </div>
                                    <div className="row text-center">
                                        <div className="col">
                                            <button className="btn btn-custom" onClick={() => this.add()}>Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default AddEmployee