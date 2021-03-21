import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import NavbarSC from '../../components/NavbarSC';
import NavbarOC from '../../components/NavbarOC';
import NavbarIT from '../../components/NavbarIT';
import NavbarFI from '../../components/NavbarFI';
import NavbarTO from '../../components/NavbarTO';
import NavbarCU from '../../components/NavbarCu';
import './AddPartner.css'
import axios from 'axios'

class AddPartner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedPartner: '',
            error: false,
            success: false,
            alreadyPartner: false,
        }
        
    }


    updateSelectedPartner(event){
        this.setState({
            selectedPartner: event.target.value
        })
        // const obj = {
        //     email: event.target.value
        // }
        console.log('hello')
      //  this.sendRequest(obj)
    }

    async sendRequest(event){
        //console.log(obj1);
        this.setState({
            error: false,
            success: false,
            alreadyPartner: false,
        })
        event.preventDefault();
        const obj = {
            email: this.state.selectedPartner
        }
        console.log(obj);
        //console.log('abcdefg');
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/organization/addPartner',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('og')
        console.log(response);
        console.log(response.status);
            if (response.status === 200) {
                this.setState({
                    success: true
                })
            }
            if (response.status === 400) {
                console.log('sami');
                this.setState({
                    alreadyPartner: true
                })
            }
       }
        catch(e){
            console.log("Armughan")
         console.log(e.response);
         if(e.response.status === 302){
             this.setState({
                 error: true
             })
         }
        }  
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
   

    render() {
      
        return (
    <div>
         {
              this.navbarDecision()
          }
        <div className="container" id="add-partner">    
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-group" action="#" onSubmit={(e) => this.sendRequest(e)}>
                                    <div className="form-group">
                                            <label htmlFor="sel1">Email:</label>
                                            <input className="form-control" value={this.state.selectedPartner} type="mail" onChange={(e) => this.updateSelectedPartner(e)} placeholder="Enter partner email"></input>
                                    </div>
                                <br/>
                                {
                                    this.state.error === true&&
                                    <p id="request-error">Organsization doesn't exist</p>
                                }
                                {
                                    this.state.success === true&&
                                    <p id="request-success">Request sent successfully!</p>
                                }
                                {
                                    this.state.alreadyPartner === true&&
                                    <p id="request-alreadyPartner">Already a partner</p>
                                }
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