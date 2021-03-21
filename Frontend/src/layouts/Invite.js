import React, { PureComponent } from 'react'
import NavbarCO from '../components/NavbarCO';
import NavbarSC from '../components/NavbarSC';
import NavbarOC from '../components/NavbarOC';
import NavbarIT from '../components/NavbarIT';
import NavbarFI from '../components/NavbarFI';
import NavbarTO from '../components/NavbarTO';
import NavbarCU from '../components/NavbarCu';
import axios from 'axios'
import './Invite.css'


class Invite extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            sucess: false,
        }
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    navbarDecision(){
        const org_type = localStorage.getItem('org_type');
        console.log(org_type);
        if(org_type === 'cargo-owner'){
            return(
                <NavbarCO/>
            )
          }
          else if(org_type === 'shipping-company'){
            return(
                <NavbarSC/>
            )
          }
          else if(org_type === 'ocean-carrier'){
            return(
                <NavbarOC/>
            )
          }
          else if(org_type === 'financial-institution'){
            return(
                <NavbarFI/>
            )
          }
          else if(org_type === 'customs'){
            return(
                <NavbarCU/>
            )
          }
          else if(org_type === 'terminal-operator'){
            return(
                <NavbarTO/>
            )
          }
          else if(org_type === 'inland-transporter'){
            return(
                <NavbarIT/>
            )
          }
    }

    async sendInvite(event){
        this.setState({
            sucess: false
        })
        event.preventDefault();
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
            if (response.status === 200) {
                this.setState({
                    sucess: true
                })
            }
            
        }
        catch(e){
            console.log(e.response);
        }
    }

    render() {
        return (
            <div>
                {
                    this.navbarDecision()
                }
                  <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="card" id="invite-card">
                                <div className="card-body">
                                    <form className="form-group p-4" onSubmit={(e) => this.sendInvite(e)}> 
                                        <div className="row">
                                            <label>Email:</label>
                                            <input className="form-control" value={this.state.email} onChange={(e) => this.updateEmail(e)}/>
                                        </div>
                                        {
                                            this.state.sucess === true&&
                                            <small id="invite-success">Invite created successfully!</small>
                                        }
                                        <br/>
                                        <br/>
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="submit" className="btn btn-custom btn-sm">Send Invite</button>
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

export default Invite