import React from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import './DashboardCO.css';
import { Redirect } from 'react-router-dom'

function DashboardCO() {
 
    return (
            <div className="wrapper">
                 <NavbarCO/> 
            <div className="container-fluid" id="card-section">
            <div className="row text-center">
                <div className="col">
                    <h2 className="welcome">Welcome! Cargo owner</h2>
                </div>   
            </div>
                <div className="row text-center">
                    <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Start a new consignment</h5>
                                <p className="card-text">Ready for your next consignment ?</p>
                                <a href="/startConsignment" className="btn btn-custom"><strong>Start</strong></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View consignments</h5>
                                <p className="card-text">Go to your shipments to see the status of your consignments.</p>
                                <a href="/viewConsignments" className="btn btn-custom"><strong>View</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                        <div className="card" id="track-card">
                            <div className="card-body">
                                <h5 className="card-title">Track consignment by id</h5>
                                <p className="card-text">Track status of consignment</p>
                                <a href="/trackConsignment" className="btn btn-custom"><strong>Track</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardCO;
