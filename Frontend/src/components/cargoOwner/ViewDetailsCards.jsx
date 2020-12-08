import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ViewDetailsCards.css';

class ViewDetailsCards extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            stops:[{
                portName: "abc",
                arrivalDate: "20-11-2020",
                departureDate: "20-11-2020"
            }] 
            
        }
    }

    render() {
        return (
            
                <div className="row">
                    <div className="col-lg-3 offset-lg-2">
                    <div className="card">
                            <div className="card-body">
                            <div id="view-details">
                            <ul>
                            <li><strong className="bold">Karachi</strong> 
                                <p><strong>Departure date: </strong>
                                    <span>20-11-2020</span>
                                </p>
                            </li> 
                                {this.state.stops.map((stop) =>
                                    <li>{stop.portName}  
                                    <p><strong>Arrival date: </strong><span> {stop.arrivalDate} </span>
                                    <strong>Departure date: </strong><span> {stop.departureDate}</span></p>
                                    </li>
                                    )}
                                <li><strong className="bold">Dubai</strong>
                                <p><strong>Arrival date: </strong>
                                    <span>25-11-2020</span>
                                </p>
                                </li>  
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body" id="events">
                            <h6>Events</h6>
                            <ul>
                                <li>Start consignment tracking</li>
                                <li>Empty container Gate-out</li>
                                <li>Container stuffing</li>
                                <li>Start consignment tracking</li>
                                <li>Gate-in Full container at export terminal</li>
                                <li>Container selected for Inspection</li>
                                <li>Customer Release</li>
                                <li>Container Loaded on Vessel</li>
                                <li>Vessel Departure</li>
                                <li>Vessel Arrival</li>
                                <li>Container Discharge from Vessel</li>
                                <li>Carrier release</li>
                                <li>Import Customs release</li>
                                <li>Gate-out Full container</li>
                                <li>Discharge from Truck</li>
                            </ul>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ViewDetailsCards