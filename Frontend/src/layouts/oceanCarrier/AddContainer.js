import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AddContainer.css'
import NavbarOC from '../../components/NavbarOC'
import axios from 'axios'
import Success from '../Success';
import Failure from '../Failure';
import {
    countries,
    cities,
    getCitiesByCountryCode,
  } from "country-city-location";

class AddContainer extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            containerType: '',
            containerSize: '',
            success: false,
            countries: [],
            cities: [],
            country: '',
            city: '',
            port: '',
            ports: [],
            portSuccess: true
        }
    }

    componentDidMount(){
       var c =countries;
       console.log(c);
        this.setState({
            countries: c
        })
     
       console.log(this.state.countries);
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
        console.log(event.target.value);
        var c = getCitiesByCountryCode(event.target.value);
        this.setState({
            cities: c
        })
    }

    updateCity(event){
        this.setState({
            city: event.target.value
        })
        console.log(this.state.city);
        this.getPorts(event.target.value);
    }

    updatePort(event){
        this.setState({
            port: event.target.value
        })
    }

     async addContainer(event){
        event.preventDefault();
        const token = localStorage.getItem('token');
        const obj = {
            containerSize: this.state.containerSize,
            type: this.state.containerType,
            port: this.state.port
        }
        console.log(obj);
        try{
            const response = await axios.post('http://localhost:4000/oceanCarrier/createContainer',obj,{
             headers: {
                 'Authorization': `Bearer ${token}`
             }
         })
         console.log(response.status);
         if (response.status === 202) {
            this.setState({
                success: true
            })
            console.log(this.state.success);
            setTimeout(function(){
               window.location.reload();
           }, 3000);
        }
        }
        catch(e){
            console.log(e.response);
        }
    }
    async getPorts(city){
        const token = localStorage.getItem('token');
        console.log(token);
        const obj = {
            cityName: city
        }
        console.log(obj);
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

    Port(port){
        return(
            <option value={port.port_id}>{port.name}</option>
        )
    }

    showCountries(value){
        return (
            <option value={value.Alpha2Code}>{value.Name}</option>
        )
    }

    showCities(value){
        return (
            <option value={value.name}>{value.name}</option>
        )
    }

    

    render() {
        return (
            <div className="wrapper">
                <NavbarOC/>
            <div className="container" id="add-container">
                <form className="form-group" onSubmit={(e) => this.addContainer(e)} action="#">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="offset-lg-1 col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="type">Container type:</label>
                                    <select className="form-control" id="sel1" value={this.state.containerType} onChange={(e) => this.updateContainerType(e)} required>
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
                                <div className="offset-lg-2 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="type">Container size:</label>
                                        <select className="form-control" value={this.state.containerSize} onChange={(e) => this.updateContainerSize(e)} id="sel2" required>
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
                                <div className="offset-lg-1 col-lg-4">
                                    <div className="form-group">
                                        <label>Country:</label>
                                        <select className="form-control" value={this.state.country} onChange={(e) => this.updateCountry(e)} id="sel2" required>
                                            <option value="">Select country</option>
                                            {
                                                this.state.countries.map((value) =>
                                                    this.showCountries(value)
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="offset-lg-2 col-lg-4">
                                    <div className="form-group">
                                        <label>City:</label>
                                        <select className="form-control" value={this.state.city} onChange={(e) => this.updateCity(e)} id="sel2" required>
                                            <option value="">Select city</option>
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
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="form-group">
                                        <label>Port where container is:</label>
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
                            </div>
                            <br/>
                            <div className="row text-center">
                                <div className="col">
                                    {
                                        this.state.success === true&&
                                        <Success message="Successfully added container!"/>
                                      
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-custom" type="submit">Add container</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default AddContainer

