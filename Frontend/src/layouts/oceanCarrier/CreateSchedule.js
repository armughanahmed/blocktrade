import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CreateSchedule.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Stop from '../../components/oceanCarrier/Stops'
import NavbarOC from '../../components/NavbarOC'


class CreateSchedule extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            ships: [],
            selectShipType: false, //If ship type selected that we'll receive corresponding free ships from backend
            addStops: false,
            stop: false,
            showStop: false,
            stops: [],
            shipType: '',
            arrivalDate: new Date(),
            departureDate: new Date(),
            ship: '',
            departurePort: '',
            destinationPort: '',
            departureCountry: '',
            departureCity: '',
            destinationCountry: '',
            destinationCity: '',
            warning: false,
            desPorts: [],
            depPorts: [],
            getDes: false,
            getDep: false,
            portSuccess1: true,
            portSuccess2: true,
        }
        this.addStopState = this.addStopState.bind(this);
    }


   

    async getShips(type){
        //type sent to backend to receive corresponding ships of that type that belongs to ocean carrier
        console.log(type);
        const token = localStorage.getItem('token');
        console.log(token);
        const obj = {
            type: type
        }
        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/getShipsByType',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        //console.log('far')
        console.log(response);
        if (response.status === 202) {
            this.setState({
                ships: response.data.data,
                warning: false,
            })
        }
        
       }
        catch(e){
         console.log(e.response);
         this.setState({
            ships: [],
            warning: true,
        })
        }  
    }

    stopFromChild = (obj) => {
        this.state.stops.push(obj);
        this.setState({
            stop: false,
            addStops: false,
            showStop: true
        })
        console.log(obj);
        console.log(this.state.stops);
    }

    updateShip(event){
        this.setState({
            ship: event.target.value
        })
    }

    updateShipType(event){
        this.setState({
            shipType: event.target.value,
            selectShipType: true
        })
        this.getShips(event.target.value)
    }

    updateDepartureCountry(event){
        this.setState({
            departureCountry: event.target.value
        })
    }

    updateDepartureCity(event){
        this.setState({
            departureCity: event.target.value
        })
    }

    updateDestinationCountry(event){
        this.setState({
            destinationCountry: event.target.value
        })
    }

    updateDestinationCity(event){
        this.setState({
            destinationCity: event.target.value
        })
    }

    updateDeparturePort(event){
        this.setState({
            departurePort: event.target.value
        })
    }

    updateDestinationPort(event){
        this.setState({
            destinationPort: event.target.value
        })
    }

    updateArrivalDate= date => {
        this.setState({arrivalDate: date})
    }

    updateDepartureDate= date => {
        this.setState({departureDate: date})
    }


    showShips(ship){
        return (
            <option value={ship.ship_id}>{ship.ship_id}</option>
            //<option value="check">Check</option>
        )
    }

    message(){
        return(
            <p>Please select ship type</p>
        )
    }

    addStopState(){
        this.setState({
            addStops: true,
            stop: true
        })
    }
    addStop(){
        return(
            <Stop stopFromChild={this.stopFromChild}/>
        )
    }

    addStopBtn(){
        return (
           <button className="btn btn-custom" onClick={this.addStopState}>Add stop</button>
        )
    }

    showStops(stop1){
        return (
                <div className="col-lg-3" id="show-stops">
                    <p><strong>Stop country:</strong> {stop1.stopCountry}</p>
                    <p><strong>Stop city:</strong> {stop1.stopCity}</p>
                </div>
        )
    }

    depPort(port){
        return(
            <option value={port.port_id}>{port.name}</option>
        )
    }

    desPort(port){
        return(
            <option value={port.port_id}>{port.name}</option>
        )
    }

    async getDeparturePorts(){
        const token = localStorage.getItem('token');
        console.log(token);
        const obj = {
            cityName: this.state.departureCity
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
                depPorts: response.data.data,
                getDep: true,
                portSuccess1: true,
            })
            console.log(this.state.desPorts)
        }
        else if(response.status === 404){
            this.setState({
                portSuccess1: false,
                depPorts: [],
            })
        }
       }
        catch(e){
         console.log(e.response);
         this.setState({
            portSuccess1: false,
            depPorts: [],
        })
        } 
    }

    async getDestinationPorts(){
        const token = localStorage.getItem('token');
        console.log(token);
        const obj = {
            cityName: this.state.destinationCity
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
                desPorts: response.data.data,
                getDes: true,
                portSuccess2: true,
            })
            console.log(this.state.desPorts)
        }
        else if(response.status === 404){
            this.setState({
                portSuccess2: false,
                desPorts: [],
            })
        }
        
       }
        catch(e){
         console.log(e.response);
         this.setState({
            portSuccess2: false,
            desPorts: [],
        })
        } 
    }

    async create(event){
        event.preventDefault();
        const obj = {
            stops: this.state.stops,
            shipType: this.state.shipType,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            ship_id: parseInt(this.state.ship),
            departurePortId: parseInt(this.state.departurePort),
            destinationPortId: parseInt(this.state.destinationPort),
            departureCountry: this.state.departureCountry,
            departureCity: this.state.departureCity,
            destinationCountry: this.state.destinationCountry,
            destinationCity: this.state.destinationCity
        }

        const token = localStorage.getItem('token');

        try{
            const response = await axios.post('http://localhost:4000/oceanCarrier/createSchedule',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response);
        }
        catch(e){
            console.log(e.response);
        }
        console.log(obj);
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarOC/>
            <div className="container" id="create-schedule">
                <form className="form-group" action="#" onSubmit={(e) => this.create(e)}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure country:</label>
                                        <input className="form-control" type="text" value={this.state.departureCountry} onChange={(e) => this.updateDepartureCountry(e)} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure city:</label>
                                        <input className="form-control" type="text" value={this.state.departureCity} onChange={(e) => this.updateDepartureCity(e)} onBlur={() => this.getDeparturePorts()} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Destination country:</label>
                                        <input className="form-control" type="text" value={this.state.destinationCountry} onChange={(e) => this.updateDestinationCountry(e)} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Destination city:</label>
                                        <input className="form-control" type="text" value={this.state.destinationCity} onChange={(e) => this.updateDestinationCity(e)} onBlur={() => this.getDestinationPorts()} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure date:</label>
                                        <br/>
                                        <DatePicker className="form-control" selected={this.state.departureDate} onChange={this.updateDepartureDate} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Arrival date:</label>
                                        <br/>
                                        <DatePicker className="form-control" selected={this.state.arrivalDate} onChange={this.updateArrivalDate} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure port:</label>
                                        <select class="form-control" id="sel1" value={this.state.departurePort} onChange={(e) => this.updateDeparturePort(e)} required>
                                        <option value="">Select departure port</option>
                                            {
                                                this.state.getDep === true&&
                                                this.state.depPorts.map((value) => (
                                                    this.depPort(value)
                                                ))
                                            }
                                        </select>
                                        {
                                            this.state.portSuccess1 === false&&
                                            <p>No port found!</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="sel2">Destination port:</label>
                                        <select class="form-control" id="sel2" value={this.state.destinationPort} onChange={(e) => this.updateDestinationPort(e)} required>
                                        <option value="">Select destination port</option>
                                            {
                                                this.state.getDes === true&&
                                                this.state.desPorts.map((value) => (
                                                    this.desPort(value)
                                                ))
                                            }

                                        </select>
                                        {
                                            this.state.portSuccess2 === false&&
                                            <p>No port found!</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="sel1">Ship type:</label>
                                        <select class="form-control" id="sel1" value={this.state.shipType} onChange={(e) => this.updateShipType(e)} required>
                                            <option value="">Select ship type</option>
                                            <option value="panamax" onClick={() => this.getShips(this.value)}>Panamax</option>
                                            <option value="suezmax">Suezmax</option>
                                            <option value="post-panamax">Post-Panamax</option>
                                            <option value="post-suezmax">Post-Suezmax</option>
                                            <option value="post-malaccamax">Post-Malaccamax</option>
                                        </select>
                                        {
                                            this.state.warning === true&&
                                            <p>No ships of this type available</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="sel2">Ship id:</label>
                                        <select class="form-control" id="sel2" value={this.state.ship} onChange={(e) => this.updateShip(e)} required>
                                            <option value="">Select ship id</option>
                                            
                                            {
                                                this.state.selectShipType === true&&
                                                this.state.ships.map((ship) => (
                                                    this.showShips(ship)  
                                                ))
                                            }
                                        </select>
                                        {
                                                this.state.selectShipType === false&&
                                                this.message()
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                            {
                                this.state.showStop === true &&
                                this.state.stops.map((stop1) => (
                                this.showStops(stop1)  
                                ))
                            }
                            </div>
                            <div className="row">
                                <div className="col text-right">
                            {
                                this.state.stop === false&&
                                this.addStopBtn()
                            }
                            </div>
                            </div>
                            
                            {
                                this.state.addStops === true&&
                                this.addStop()
                            }
                             <div className="row">
                        <div className="col text-center">
                            <button className="btn btn-custom" type="submit">Create schedule</button>
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

export default CreateSchedule

