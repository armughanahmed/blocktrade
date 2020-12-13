import React, { PureComponent } from 'react'
import NavbarCO from '../components/NavbarCO';
import './AddPartner.css'
import axios from 'axios'

class AddPartner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            role: 'employee',
            email: '' 
        }
        
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    async sendInvite(event){
        //console.log(obj1);
        const obj = {
            email: this.state.email,
            role: this.state.role
        }
        console.log(obj);
        //console.log('abcdefg');
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/user',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
       }
        catch(e){
         console.log(e);
        }  
    }
   

    render() {
        return (
    <div>
            <NavbarCO/>
        <div className="container" id="add-partner">    
            <div className="row">
                <div className="col text-center">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-group" action="#" onSubmit={(e) => this.sendInvite(e)}>
                                <label>Email: </label>
                                <div className="row">
                                    <input className="form-control" value={this.state.email} onChange={(e) => this.updateEmail(e)} placeholder="Enter partner email" type="mail" required></input>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col text-right">
                                        <button type="submit" className="btn btn-custom">Send invite</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        )
    }
}

export default AddPartner