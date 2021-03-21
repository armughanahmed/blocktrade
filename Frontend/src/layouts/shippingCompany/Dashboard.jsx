import React from 'react'
import './Dashboard.css'
import NavbarSC from '../../components/NavbarSC'

function Dashboard() {
    return (
        <div className="wrapper">
            <NavbarSC/>
        <div className="container-fluid" id="card-section">
        <div className="row text-center">
                <div className="col">
                    <h2 className="welcome">Welcome! Shipping company</h2>
                </div>   
            </div>
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create shipment</h5>
                            <p className="card-text">Ready for the next shipment?</p>
                            <a href="/createShipment" className="btn btn-custom"><strong>Create</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View shipments</h5>
                            <p className="card-text">Current and completed shipments</p>
                            <a href="/viewShipments" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
            <div className="col-lg-5 col-md-12 col-sm-12 offset-lg-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Quotations</h5>
                            <p className="card-text">View pending and approved quotations</p>
                            <a href="/makeQuotation" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Track shipment</h5>
                            <p className="card-text">Track the status of shipment</p>
                            <a href="/track" className="btn btn-custom"><strong>Track</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Book container</h5>
                            <p className="card-text">Book container according to the schedules available</p>
                            <a href="/bookContainer" className="btn btn-custom"><strong>Create</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View conatiners</h5>
                            <p className="card-text">View booked containers</p>
                            <a href="/viewContainer" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard

