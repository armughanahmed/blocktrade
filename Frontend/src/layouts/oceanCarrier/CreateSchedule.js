import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CreateSchedule.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Stop from '../../components/oceanCarrier/Stops'
import NavbarOC from '../../components/NavbarOC'
import NavbarCO from '../../components/NavbarCO';

class CreateSchedule extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            ships: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ],
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
            destinationCity: ''
        }
        this.addStopState = this.addStopState.bind(this);
    }


   

    async getShips(type){
        //type sent to backend to receive corresponding ships of that type that belongs to ocean carrier
        const token = localStorage.getItem('token');
        //console.log(token);
        try{ 
        const response = await axios.post('http://localhost:4000/organization/removePartner',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        //console.log('far')
        this.setState({
            ships: response.data
        })
        console.log(response)
       }
        catch(e){
         console.log(e);
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
            <option value={ship.id}>{ship.id}</option>
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

    create(event){
        event.preventDefault();
        const obj = {
            stops: this.state.stops,
            shipType: this.state.shipType,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate,
            ship: this.state.ship,
            departurePort: this.state.departurePort,
            destinationPort: this.state.destinationPort,
            departureCountry: this.state.departureCountry,
            departureCity: this.state.departureCity,
            destinationCountry: this.state.destinationCountry,
            destinationCity: this.state.destinationCity
        }
        console.log(obj);
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarCO/>
            <div className="container" id="create-schedule">
                <form className="form-group" action="#" onSubmit={(e) => this.create(e)}>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure country:</label>
                                        <input className="form-control" type="text" onChange={(e) => this.updateDepartureCountry(e)} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Departure city:</label>
                                        <input className="form-control" type="text" onChange={(e) => this.updateDepartureCity(e)} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Destination country:</label>
                                        <input className="form-control" type="text" onChange={(e) => this.updateDestinationCountry(e)} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Destination city:</label>
                                        <input className="form-control" type="text" onChange={(e) => this.updateDestinationCity(e)} required/>
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
                                        <input className="form-control" type="text" onChange={(e) => this.updateDeparturePort(e)} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Destination port:</label>
                                        <input className="form-control" type="text" onChange={(e) => this.updateDestinationPort(e)} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="sel1">Ship type:</label>
                                        <select class="form-control" id="sel1" value={this.state.shipType} onChange={(e) => this.updateShipType(e)} required>
                                            <option value="">Select ship type</option>
                                            <option value="panamax">Panamax</option>
                                            <option value="suezmax">Suezmax</option>
                                            <option value="post-panamax">Post-Panamax</option>
                                            <option value="post-suezmax">Post-Suezmax</option>
                                            <option value="post-malaccamax">Post-Malaccamax</option>
                                        </select>
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

