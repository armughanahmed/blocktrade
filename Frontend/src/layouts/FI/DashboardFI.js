import React from 'react'
import NavbarFI from '../../components/NavbarFI';
import Footer from '../../components/Footer';
import './DashboardFI.css';
import { Redirect } from 'react-router-dom'

function DashboardFI() {
 
    return (
            <div className="wrapper">
                 <NavbarFI/> 
            <div className="container-fluid" id="card-section">
            <div className="row text-center">
                <div className="col">
                    <h2 className="welcome">Welcome! Financial institution</h2>
                </div>   
            </div>
                <div className="row text-center">
                    <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View Previous LCs</h5>
                                <p className="card-text">Previous letter of credit</p>
                                <a href="/lcPrevious" className="btn btn-custom"><strong>View</strong></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">View request</h5>
                                <p className="card-text">Requests for letter of credit</p>
                                <a href="/lcRequests" className="btn btn-custom"><strong>View</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                        <div className="card" id="track-card">
                            <div className="card-body">
                                <h5 className="card-title">Search Letter of Credit</h5>
                                <p className="card-text">Find your required letter by id</p>
                                <a href="/lcSearch" className="btn btn-custom"><strong>Search</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashboardFI;
