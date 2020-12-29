import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Stops extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            stopCountry: '',
            stopCity: '',
            arrivalDate: new Date(),
            departureDate: new Date() 
        }
    }
    add(event){
        event.preventDefault();
        const obj = {
            stopCountry: this.state.stopCountry,
            stopCity: this.state.stopCity,
            arrivalDate: this.state.arrivalDate,
            departureDate: this.state.departureDate
        }
        this.props.stopFromChild(obj);
    }

    updateStopCountry(event){
        this.setState({
            stopCountry: event.target.value
        })
    }

    updateStopCity(event){
        this.setState({
            stopCity: event.target.value
        })
    }

    updateArrivalDate= date => {
        this.setState({arrivalDate: date})
    }

    updateDepartureDate= date => {
        this.setState({departureDate: date})
    }

    render() {
        return (
            <div id="stops">
                <form className="form-group" action="#" onSubmit={(e) => this.add(e)}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Stop country:</label>
                        <input type="text" className="form-control" onChange={(e) => this.updateStopCountry(e)} required/>
                    </div>
                    <div className="col-lg-6">
                        <label>Stop city:</label>
                        <input type="text" className="form-control" onChange={(e) => this.updateStopCity(e)} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <br/>
                        <label>Arrival date:</label>
                        <br/>
                        <DatePicker className="form-control" selected={this.state.arrivalDate} onChange={this.updateArrivalDate} required/>
                    </div>
                    <div className="col-lg-6">
                        <br/>
                        <label>Departure date:</label>
                        <br/>
                        <DatePicker className="form-control" selected={this.state.departureDate} onChange={this.updateDepartureDate} required/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col text-right">
                        <button className="btn btn-custom" type="submit">Confirm stop</button>
                    </div>
                </div>
                <hr/>
                </form>
            </div>
        )
    }
}

export default Stops