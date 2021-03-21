import React, { PureComponent } from 'react'
import './AddPartnerSc.css'
import axios from 'axios'

class AddPartnerSc extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedPartner: '',
           
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
        console.log(response);
       }
        catch(e){
         console.log(e);
        }  
    }

  
   

    render() {
        return (
    <div>
        <div className="container" id="add-partner">    
            <div className="row">
                <div className="col text-center">
                    <div className="card">
                        <div className="card-body">
                            <form className="form-group" action="#" onSubmit={(e) => this.sendRequest(e)}>
                                    <div className="form-group">
                                            <label htmlFor="sel1">Email:</label>
                                            <input className="form-control" value={this.state.selectedPartner} type="mail" onChange={(e) => this.updateSelectedPartner(e)} placeholder="Enter partner email"></input>
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

export default AddPartnerSc