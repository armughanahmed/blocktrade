import React, { PureComponent } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookContainer.css'
import SearchResult from '../../components/shippingCompany/SearchResult'
import NavbarSc from '../../components/NavbarSC'
import axios from 'axios'
import {
    countries,
    cities,
    getCitiesByCountryCode,
  } from "country-city-location";

class BookContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            check: false,
            containerType: '',
            containerSize: '',
            country: '',
            countries: [],
            cities: [],
            city: '',
            searchResult:[],
              ports: [],
              port: '',
              portSuccess: true,
              book_till: new Date(),
              noContainers: false,
        }
    }

    componentDidMount(){
        this.setState({
            countries: countries
        })
    }

    updateContainerType(event){
        this.setState({
            containerType: event.target.value
        })
    }

    updateContainerSize(event){
        this.setState({
            containerSize: event.target.value
        })
    }

    updateCountry(event){
        this.setState({
            country: event.target.value
        })
        var c = getCitiesByCountryCode(event.target.value);
        this.setState({
            cities: c
        })
    }


    updateCity(event){
        this.setState({
            city: event.target.value
        })
        this.getPorts(event.target.value)
    }

    async getPorts(city){
        const token = localStorage.getItem('token');
        console.log(token);
        const obj = {
            cityName: city
        }
        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/getPort',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        //console.log('far')
        console.log(response);
        if (response.status === 202) {
            this.setState({
                ports: response.data.data,
                getPort: true,
                portSuccess: true,
            })
            console.log(this.state.desPorts)
        }
        else if(response.status === 404){
            // console.log('hello');
            this.setState({
                portSuccess: false,
                ports: [],
            })
        }
        
       }
        catch(e){
         console.log(e.response);
         this.setState({
            portSuccess: false,
            ports: [],
        })
        } 
    }

    updateBookTill= (date) => 
    {    
        this.setState({book_till: date});  
    };

    updatePort(event){
        this.setState({
            port: event.target.value
        })
    }

    Port(port){
        return(
            <option value={port.port_id}>{port.name}</option>
        )
    }

   async search(event){
       event.preventDefault();
        const token = localStorage.getItem('token');
        this.setState({
            noContainers: false,
        })
        //console.log(token);
        const obj = {
            type: this.state.containerType,
            port: this.state.port,
            containerSize: this.state.containerSize
        }
        try{ 
        const response = await axios.post('http://localhost:4000/shippingCompany/bookContainers',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        //console.log('far')
        console.log(response);
        this.setState({
            searchResult: response.data.data,
            check: true
        })
        console.log(this.state.searchResult);
        
       }
        catch(e){
            this.setState({
                noContainers: true
            })
         console.log(e.response);
        } 
    }

    showCountries(value){
        return(
            <option value={value.Alpha2Code}>{value.Name}</option>
        )
    }

    showCities(value){
        return(
            <option value={value.name}>{value.name}</option>
        )
    }

    

  
    render() {
        return (
            <div className="wrapper">
                <NavbarSc/>
            <div className="container" id="book-container">
                <h3>Book container</h3>
                <form className="form-group" action="#" onSubmit={(e) => this.search(e)}>
                <div className="row">
                    <div className="col-lg-2 offset-lg-1">
                        <label>Container type:</label>
                    </div>
                    <div className="col-lg-3 ">
                        <div class="form-group">
                            <select class="form-control" value={this.state.containerType} onChange={(e) => this.updateContainerType(e)} id="sel1" required>
                                <option value="">Select container type</option>
                                <option value="dry-storage">Dry storage</option>
                                <option value="flat-rack">Flat rack</option>
                                <option value="open-top">Open top</option>
                                <option value="tunnel">Tunnel</option>
                                <option value="open-side-storage">Open side storage</option>
                                <option value="double-door">Double door</option>
                                <option value="refrigrated-iso">Refrigrated ISO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <label>Container size:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
                            <select class="form-control" value={this.state.containerSize} onChange={(e) => this.updateContainerSize(e)} id="sel2" required>
                                <option value="">Select container size</option>
                                <option value="20-ft 28300-kg 33-m³">20 ft Fits up to 28 300 kg & 33 m³</option>
                                <option value="40-ft 28800-kg 67-m³">40 ft Fits up to 28 800 kg & 67 m³</option>
                                <option value="40-ft-HC 28690-kg 76-m³">40 ft HC Fits up to 28 690 kg & 76 m³</option>
                                <option value="45-ft-HC 27650-kg 85-m³">45 ft HC Fits up to 27 650 kg & 85 m³ </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 offset-lg-1">
                        <label>Origin country:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
                        <select class="form-control" value={this.state.country} onChange={(e) => this.updateCountry(e)} id="sel5" required>
                                <option value="">Select origin country</option>
                                {
                                    this.state.countries.map((value) =>
                                        this.showCountries(value)
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <label>Origin city:</label>
                    </div>
                    <div className="col-lg-3">
                        <div class="form-group">
                        <select class="form-control" value={this.state.city} onChange={(e) => this.updateCity(e)} id="sel5" required>
                                <option value="">Select origin city</option>
                                {
                                    this.state.cities.map((value) =>
                                        this.showCities(value)
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 offset-lg-1">
                        <label>Origin port:</label>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <select class="form-control" id="sel1" value={this.state.port} onChange={(e) => this.updatePort(e)} required>
                                <option value="">Select port</option>
                                {
                                    this.state.getPort === true&&
                                    this.state.ports.map((value) => (
                                    this.Port(value)
                                    ))
                                }
                            </select>
                            {
                                this.state.portSuccess === false&&
                                <p>No port found!</p>
                            }
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <label>Book till:</label>
                        </div>
                        <div className="col-lg-3">
                            <DatePicker className="form-control" dateFormat="yyyy/MM/dd" selected={this.state.book_till} onChange={(date) => this.updateBookTill(date)} required/>
                        </div>
                    </div>
                    {
                    this.state.noContainers === true&&
                    <p className="no-container">No {this.state.containerType} containers found at  this location!</p>
                }
                <div className="row">
                    <div className="col text-center">
                        <br/>
                        <br/>
                        <button type="submit" className="btn btn-custom">Search</button>
                    </div>
                </div>
                </form>
                {
                    this.state.check === true &&
                    <SearchResult  searchResult={this.state.searchResult} booking={this.state.book_till}/>  
                }
              
            </div>
            </div>
        )
    }
}

export default BookContainer
