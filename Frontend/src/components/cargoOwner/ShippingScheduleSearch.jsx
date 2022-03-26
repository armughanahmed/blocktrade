import React, { PureComponent,useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ShippingScheduleSearch.css';

class ShippingScheduleSearch extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            originCountry: '',
            originCity: '',
            destinationCountry: '',
            destinationCity: '',
            departureDate: new Date(),
            arrivalDate: new Date(),
            currency: ''
        }
        this.search = this.search.bind(this);
    }

    updateOriginCountry(event){
        this.setState({originCountry: event.target.value})
    }

    updateOriginCity(event){
        this.setState({originCity: event.target.value})
    }

    updateDestinationCountry(event){
        this.setState({destinationCountry: event.target.value})
    }

    updateDestinationCity(event){
        this.setState({destinationCity: event.target.value})
    }


    updateDepartureDate= (date) => 
    {    
        this.setState({departureDate: date});  
    };
   

    updateArrivalDate= (date) => {
        this.setState({arrivalDate: date})
    }

    updateCurrency(event){
        this.setState({currency: event.target.value})
    }
   
    search(event){
        event.preventDefault();
        const obj = {
            originCountry: this.state.originCountry,
            originCity: this.state.originCity,
            destinationCountry: this.state.destinationCountry,
            destinationCity: this.state.destinationCity,
            departureDate: this.state.departureDate,
            arrivalDate: this.state.arrivalDate,
            currency: this.state.currency
        }
        console.log(obj);
        this.props.searchFromChild(obj);
    }
   
    render() {
        return (
        <div className="shipping-schedule-search">
        <form action="#" onSubmit={(e) => this.search(e)}>
                            <div className="row">
                            <div className="col-lg-5 col-sm-12 offset-lg-1">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Where are you shipping from?</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label htmlFor="">Origin country:</label>
                                                <input className="form-control" type="text" id="origincountry" value={this.state.originCountry} onChange={(e) => this.updateOriginCountry(e)} placeholder="Enter origin country" required/>
                                            </div>
                                            <br/>
                                            <div className="col-lg-12">
                                                <br/>
                                                <label htmlFor="">Origin city:</label>
                                                <input className="form-control" type="text" id="origincity" value={this.state.originCity} onChange={(e) => this.updateOriginCity(e)} placeholder="Enter origin city" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Where are you shipping to?</h4>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <label htmlFor="">Destination country:</label>
                                                <input className="form-control" type="text" id="destinationcountry" value={this.state.destinationCountry} onChange={(e) => this.updateDestinationCountry(e)} placeholder="Enter destination country" required />
                                            </div>
                                            <div className="col-lg-12">
                                                <br/>
                                                <label htmlFor="">Destination city:</label>
                                                <input className="form-control" type="text" id="destinationcity" value={this.state.destinationCity} onChange={(e) => this.updateDestinationCity(e)} placeholder="Enter destination city" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="row">
                        <div className="col-lg-5 offset-lg-1 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4>When you want to ship?</h4>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-1">
                                            <label htmlFor="">Departure date:</label>
                                            <br/>
                                                <DatePicker className="form-control" dateFormat="yyyy/MM/dd" selected={this.state.departureDate} onChange={(date) => this.updateDepartureDate(date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4>When you want the package to arrive at destination?</h4>
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-1">
                                            <label htmlFor="">Arrival date:  </label>
                                            <br/>
                                                <DatePicker className="form-control" dateFormat="yyyy/MM/dd" selected={this.state.arrivalDate} onChange={(date) => this.updateArrivalDate(date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10 text-center">
                            <div class="form-group">
                            <div className="card">
                                <div className="card-body">
                                    <label for="sel1">Currency:</label>
                                        <select class="form-control" id="sel1" value={this.state.currency} onChange={(e) => this.updateCurrency(e)} required>
                                            <option value="">Select currency</option>
                                            <option value="euro">EUR-Euros</option>
                                            <option value="dollar">USD-Dollars</option>
                                            <option value="rupee">PKR-Pakistani rupees</option>
                                        </select>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button type="submit" className="btn btn-custom">Search</button>
                        </div>
                    </div>
                    </form>
        
      
</div>

        )
    }
}

export default ShippingScheduleSearch