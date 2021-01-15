import React, { PureComponent } from 'react'
import './MakeQuotations.css'
import NavbarSC from '../../components/NavbarSC'
import axios from 'axios'

class MakeQuotations extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            quotations : [],
            selectedQuotation: '',
            fcl : [],
            lcl : [],
            schedule: '',
            quote: false,
            showSchedule: false,

        }
    }

    updateSelectedQuotation(event){
        if (event.target.value === "") {
            this.setState({
                showSchedule: false
            })
        }
        else{
            this.setState({
                showSchedule: true
            })
        }
        this.setState({
            selectedQuotation: event.target.value,
            quote: true
        })
        console.log(typeof(event.target.value));
        const obj = {
            quotation_id: parseInt(event.target.value)
        }
        this.getDetails(obj);
    }

    showQuotations(quotation){
        return (
            <option key={quotation.quotation_id} value={quotation.quotation_id}>{quotation.quotation_id}</option>
        )
    }

    async getDetails(obj1){
        console.log(obj1);
        const token = localStorage.getItem('token');
        try{
            const response = await axios.post('http://localhost:4000/shippingCompany/viewQuotationsDetails',obj1,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response);
            this.setState({
                lcl: response.data.data.lcl,
                fcl: response.data.data.fcl,
                schedule: response.data.data.schedule
            })
        }
        catch(e){
            console.log(e);
           } 
    }

    componentDidMount(){
        this.getQuotations();
    }

    async getQuotations(){
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.get('http://localhost:4000/shippingCompany/viewQuotations',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    
        console.log(response.data.data);
        this.setState({
            quotations: response.data.data
        })
         //this.props.history.push('/dashboard');
       }
        catch(e){
         console.log(e);
        }  
       }

    showFcl(fcl){
        if (this.state.quote === true) {
            return (
                <div className="col-lg-4" id="fcl-card">
                    <div className="card">
                        <div className="card-body">
                            <h5>Ocean FCL</h5>
                            <p>Quantity:  {fcl.quantity}</p>
                            <p>Container height:  {fcl.containerHeight}</p>
                            <p>Container description:  {fcl.containerDescription}</p>
                        </div>
                    </div>
                </div>
            ) 
        } 
    }

    showLcl(lcl){
        if (this.state.quote === true) {
        return (
            <div className="col-lg-4" id="lcl-card">
                <div className="card">
                    <div className="card-body">
                        <h5>Ocean LCL</h5>
                        <p>Quantity:  {lcl.quantity}</p>
                        <p>Length:  {lcl.length}</p>
                        <p>Width:  {lcl.width}</p>
                        <p>Height:  {lcl.height}</p>
                        <p>Package type:  {lcl.packageType}</p>
                    </div>
                </div>
            </div>
        )
        }
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarSC/>
            <div className="container" id="make-quotation">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <label htmlFor="sel1">Quotation:</label>
                                            <select className="form-control" id="sel1" value={this.state.selectedQuotation} onChange={(e) => this.updateSelectedQuotation(e)} required>
                                                <option value="">Select quotation</option>
                                                {this.state.quotations.map((quotation) => (
                                                    this.showQuotations(quotation)  
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" id="fcl-row">
                                        {this.state.fcl.map((fcl) => (
                                            this.showFcl(fcl)  
                                        ))}
                                    </div>
                                    <div className="row" id="lcl-row">
                                        {this.state.lcl.map((lcl) => (
                                            this.showLcl(lcl)  
                                        ))}
                                    </div>
                                    {
                                        this.state.showSchedule === true &&
                                        <div className="row">
                                            <div className="col-lg-5 offset-lg-4" id="schedule-details">
                                                <h3>Schedule details</h3>
                                            <ul>
                                                <li><strong>Schedule id: </strong>{this.state.schedule.schedule_id}</li>
                                                <li><strong>Origin country: </strong>{this.state.schedule.origin_country}</li>
                                                <li><strong>Origin city: </strong>{this.state.schedule.origin_city}</li>
                                                <li><strong>Departure date: </strong>{this.state.schedule.departure_date}</li>
                                                <li><strong>Arrival country: </strong>{this.state.schedule.destination_country}</li>
                                                <li><strong>Arrival city: </strong>{this.state.schedule.destination_city}</li>
                                                <li><strong>Arrival date: </strong>{this.state.schedule.arrival_date}</li>
                                            </ul>
                                            </div>
                                        </div>
                                    }
                                    
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

export default MakeQuotations