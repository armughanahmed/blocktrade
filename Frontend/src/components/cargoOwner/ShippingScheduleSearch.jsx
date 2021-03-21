import React, { PureComponent,useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './ShippingScheduleSearch.css';
import {
    countries,
    cities,
    getCitiesByCountryCode,
  } from "country-city-location";

class ShippingScheduleSearch extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            originCountry: '',
            originCity: '',
            destinationCountry: '',
            countries1: [],
            cities1: [],
            countryCode1: '',
            countryCode2: '',
            countries2: [],
            cities2: [],
            destinationCity: '',
            departureDate: new Date(),
            arrivalDate: new Date(),
            currency: ''
        }
        this.search = this.search.bind(this);
    }

    componentDidMount(){
        this.setState({
            countries1: countries,
            countries2: countries
        })
    }

    updateOriginCountry(event){
        var check = document.getElementById(event.target.value);
        var name = check.getAttribute('name');
        console.log(name);
        this.setState({originCountry: event.target.value})
        var c = getCitiesByCountryCode(name);
        this.setState({
            cities1: c
        })
    }

    updateOriginCity(event){
        this.setState({originCity: event.target.value})
    }

    updateDestinationCountry(event){
        var check = document.getElementById(event.target.value);
        var name = check.getAttribute('name');
        console.log(name);
        this.setState({destinationCountry: event.target.value})
        var c = getCitiesByCountryCode(name);
        this.setState({
            cities2: c
        })
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

    showCountries(value){
        return(
            <option value={value.Name} id={value.Name} name={value.Alpha2Code}>{value.Name}</option>
        )
    }
   
    showCities(value){
        return(
            <option value={value.name}>{value.name}</option>
        )
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
                                                <select class="form-control" id="origincountry" value={this.state.originCountry} onChange={(e) => this.updateOriginCountry(e)} id="sel5" required>
                                                    <option value="">Select origin country</option>
                                                    {
                                                        this.state.countries1.map((value) =>
                                                            this.showCountries(value)
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <br/>
                                            <div className="col-lg-12">
                                                <br/>
                                                <label htmlFor="">Origin city:</label>
                                                <select class="form-control" id="origincity" value={this.state.originCity} onChange={(e) => this.updateOriginCity(e)} id="sel5" required>
                                                    <option value="">Select origin city</option>
                                                    {
                                                        this.state.cities1.map((value) =>
                                                            this.showCities(value)
                                                        )
                                                    }
                                                </select>
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
                                                <select class="form-control" id="destinationcountry" value={this.state.destinationCountry} onChange={(e) => this.updateDestinationCountry(e)} id="sel5" required>
                                                    <option value="">Select destination country</option>
                                                    {
                                                        this.state.countries2.map((value) =>
                                                            this.showCountries(value)
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-lg-12">
                                                <br/>
                                                <label htmlFor="">Destination city:</label>
                                                <select class="form-control" id="destinationcity" value={this.state.destinationCity} onChange={(e) => this.updateDestinationCity(e)} id="sel5" required>
                                                    <option value="">Select destination city</option>
                                                    {
                                                        this.state.cities2.map((value) =>
                                                            this.showCities(value)
                                                        )
                                                    }
                                                </select>
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