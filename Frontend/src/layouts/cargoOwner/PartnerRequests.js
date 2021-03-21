import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import NavbarSC from '../../components/NavbarSC';
import NavbarOC from '../../components/NavbarOC';
import NavbarIT from '../../components/NavbarIT';
import NavbarFI from '../../components/NavbarFI';
import NavbarTO from '../../components/NavbarTO';
import NavbarCU from '../../components/NavbarCu';
import './PartnerRequest.css'
import axios from 'axios'


class PartnerRequests extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            requests: []
           
        }
        
    }


    componentDidMount(){
        this.getRequest()
    }

    async getRequest(){
        const token = localStorage.getItem('token');
      
        try{ 
        const response = await axios.get('http://localhost:4000/organization/getRequests',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log('far')
        console.log(response.data)
        this.setState({
            requests: response.data.data
        })
       }
        catch(e){
         console.log(e);
        }  
    }

    async accept(event,id){
        const obj = {
            partner_id: id
        }
        const token = localStorage.getItem('token');
        console.log(token);
        try{ 
        const response = await axios.patch('http://localhost:4000/organization/acceptPartner',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        //console.log('far')
        console.log(response)
       }
        catch(e){
         console.log(e);
        }  
    }

    async reject(event,id){
        const obj = {
            partner_id: id
        }
        const token1 = localStorage.getItem('token');
        console.log(token1);
        try{ 
        const response = await axios.post('http://localhost:4000/organization/deleteRequest',obj,{
            headers: {
                'Authorization': `Bearer ${token1}`
            }
        })
        //console.log('far')
        console.log(response)
       }
        catch(e){
         console.log(e);
        }  
    }

    showRequests(request){
        return(
            <tr className="active">
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td><button className="btn btn-success" onClick={(e) => this.accept(e,request.id)}>Accept</button></td>
                <td><button className="btn btn-danger" onClick={(e) => this.reject(e,request.id)}>Reject</button></td>
            </tr>
        )
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
        <div className="container" id="pending-requests">    
            <div className="row">
            <h3>Pending requests</h3> 
            <div class="table-responsive">
                <table class="table table-bordered table-success">
                  
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.requests.map((request) => (
                            this.showRequests(request)  
                        ))}  
                    </tbody>        
            </table>
           </div>
        </div>
    </div> 
    </div> 
        )
    }
}

export default PartnerRequests