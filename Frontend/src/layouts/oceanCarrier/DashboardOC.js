import React from 'react'
import './DashboardOc.css'
import NavbarOC from '../../components/NavbarOC'

function DashboardOC() {
    return (
        <div className="wrapper" >
        <NavbarOC/>    
        <div className="container-fluid" id="ocean-carrier-dashboard">
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create schedule</h5>
                            <p className="card-text">Make a new schedule</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>Create</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Update schedule</h5>
                            <p className="card-text">Update a current schedule</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>Update</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View shipments</h5>
                            <p className="card-text">View all shipments</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View containers</h5>
                            <p className="card-text">View all containers</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add container</h5>
                            <p className="card-text">Add a container</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>Add</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View ships</h5>
                            <p className="card-text">View all ships</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-5 offset-lg-1">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add ship</h5>
                            <p className="card-text">Add a ship</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>Add</strong></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pending confirmation</h5>
                            <p className="card-text">View shipments pending confirmation</p>
                            <a href="/startConsignment" className="btn btn-custom"><strong>View</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DashboardOC

