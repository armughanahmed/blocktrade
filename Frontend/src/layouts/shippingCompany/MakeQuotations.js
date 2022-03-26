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
            charges: false,
            quoteCharges: '',
            lclCharges: [],
            fclCharges: [],
            success: false,

        }
    }

    updateSelectedQuotation(event){
        if (event.target.value === "") {
            this.setState({
                showSchedule: false,
                charges: false
            })
        }
        else{
            this.setState({
                showSchedule: true,
                charges: true,
                success: false
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

       checking1(event,id,mode){
        const obj = {
            lcl_id: id,
            charges: parseInt(event.target.value),
            mode: mode,
        }
        this.state.lclCharges.push(obj);
        console.log(this.state.lclCharges);
       }

       updateLclCharges(event,id,mode){
        if(this.state.lclCharges.length !== 0){
            let temp = id;
            //console.log(temp);
            let i = -1;
            let array = this.state.lclCharges;
            console.log(array);
             for (let index = 0; index < array.length; index++) {
                 
                 if (temp == array[index].lcl_id) {
                     i = index;
                     //flag = 1;
                     break;       
                 }
                 // else{
                 //     temp = array[index].lcl_id;
                 // }
                 
             }

        if (i > -1) {
            array[i].charges = parseInt(event.target.value);
            this.setState({
                lclCharges: []
            })
            this.setState({
                lclCharges: array
            })
        }

        else if(i == -1){
            //alert('bhai bhao');
            this.checking1(event,id,mode)
        }

             
        }
        else{
         const obj = {
             lcl_id: id,
             charges: parseInt(event.target.value),
             mode: mode,
         }
         this.state.lclCharges.push(obj);
         console.log(this.state.lclCharges);
         }
       }

       checking(event,id,mode){
        const obj = {
            fcl_id: id,
            charges: parseInt(event.target.value),
            mode: mode,
        }
        this.state.fclCharges.push(obj);
        console.log(this.state.fclCharges);
       }

       updateFclCharges(event,id,mode){
           if(this.state.fclCharges.length !== 0){
               let temp = id;
               //console.log(temp);
               let i = -1;
               let array = this.state.fclCharges;
               console.log(array);
                for (let index = 0; index < array.length; index++) {
                    
                    if (temp == array[index].fcl_id) {
                        i = index;
                        //flag = 1;
                        break;       
                    }
                    // else{
                    //     temp = array[index].fcl_id;
                    // }
                    
                }

           if (i > -1) {
               array[i].charges = parseInt(event.target.value);
               this.setState({
                   fclCharges: []
               })
               this.setState({
                   fclCharges: array
               })
           }

           else if(i == -1){
               //alert('bhai bhao');
               this.checking(event,id,mode)
           }

                
           }
           else{
            const obj = {
                fcl_id: id,
                charges: parseInt(event.target.value),
                mode: mode,
            }
            this.state.fclCharges.push(obj);
            console.log(this.state.fclCharges);
            }
       }

        async makeQuote(event){
            event.preventDefault();
           const obj = {
               lcl: this.state.lclCharges,
               fcl: this.state.fclCharges,
               quotationId: parseInt(this.state.selectedQuotation),
               scheduleId: this.state.schedule.schedule_id
           }
           console.log(obj);
           const token = localStorage.getItem('token');
           try{
               const response = await axios.post('http://localhost:4000/shippingCompany/makeQuotation',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response);
            if(response.data.success === 1){
                this.setState({
                    success: true,
                    showSchedule: false
                })
                setTimeout(function(){ 
                    var url = `http://127.0.0.1:8080/${response.data.data}`;
                    window.open(url,null);
                }, 2000);
                setTimeout(function(){ 
                    window.location.reload();
                 }, 4000);
               
            }
            
           }
           catch(e){
               console.log(e.response);
           }
       }



     

    showFcl(fcl){
        if (this.state.quote === true) {
            return (
                <div className="col-lg-4 col-md-6 col-sm-12" id="fcl-card">
                    <div className="card">
                        <div className="card-body">
                            <h5>Ocean FCL</h5>
                            <p>Id: {fcl.fcl_id}</p>
                            <p>Quantity:  {fcl.quantity}</p>
                            <p>Container height:  {fcl.containerHeight}</p>
                            <p>Container description:  {fcl.containerDescription}</p>
                            <label>Charges:</label>
                            <input className="form-control" placeholder="Enter charges" type="number" min="0" onBlur={(e)=> this.updateFclCharges(e,fcl.fcl_id,fcl.mode)} required/>
                        </div>
                    </div>
                </div>
            ) 
        } 
    }

    showLcl(lcl){
        if (this.state.quote === true) {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12" id="lcl-card">
                <div className="card">
                    <div className="card-body">
                        <h5>Ocean LCL</h5>
                        <p>Id: {lcl.lcl_id}</p>
                        <p>Quantity:  {lcl.quantity}</p>
                        <p>Length:  {lcl.length}</p>
                        <p>Width:  {lcl.width}</p>
                        <p>Height:  {lcl.height}</p>
                        <p>Package type:  {lcl.type}</p>
                        <label>Charges:</label>
                        <input className="form-control" placeholder="Enter charges" onBlur={(e) => this.updateLclCharges(e,lcl.lcl_id,lcl.mode)} required/>
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
                                    <div className="row text-center">
                                        {
                                            this.state.success === true&&
                                            <div className="col">
                                                <p id="quote-success">Quotation sent succesfully!</p>
                                            </div> 
                                            
                                        }
                                    </div>
                                    {
                                        this.state.showSchedule === true &&
                                        <div >
                                        <div className="row">
                                            <div className="col-lg-6 offset-lg-3"   id="schedule-details">
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
                                        </div>
                                    }
                                    <form className="form-group" onSubmit={(e) => this.makeQuote(e)}> 
                                        <div className="row" id="fcl-row">
                                            {this.state.success === false&&
                                                this.state.fcl.map((fcl) => (
                                                this.showFcl(fcl)  
                                            ))}
                                        </div>
                                        <div className="row" id="lcl-row">
                                            {   this.state.success === false&&
                                                this.state.lcl.map((lcl) => (
                                                this.showLcl(lcl)  
                                            ))}
                                        </div>
                                        <div className="row text-center" id="make-quote-btn">
                                            <div className="col">
                                                <button className="btn btn-custom" type="submit">Make Quote</button>
                                            </div>
                                        </div>
                                    </form>                 
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