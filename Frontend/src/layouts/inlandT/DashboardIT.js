import React from "react";
import NavbarIT from "../../components/NavbarIT";
import Footer from "../../components/Footer";
import "./DashboardIT.css";
import { Redirect } from "react-router-dom";

function DashboardIT() {
  return (
    <div className="wrapper">
      <NavbarIT/>
      <div className="container-fluid" id="card-section">

        <div className="row text-center">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
            <div className="card" id="track-card">
              <div className="card-body">
                <h5 className="card-title">Search Consignment</h5>
                <p className="card-text">Find your required consignment by id</p>
                <a href="/ITSearch" className="btn btn-custom">
                  <strong>Search</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View All Shipments</h5>
                <p className="card-text">Take a look at all shipments</p>
                <a href="/ITViewShipment" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add new routes</h5>
                <p className="card-text">Add/Update new routes to expand your network</p>
                <a href="/itaddroute" className="btn btn-custom mx-3">
                  <strong>Add</strong>
                </a>
                <a href="/itviewroute" className="btn btn-custom">
                  <strong>View/Update</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add a vehicle</h5>
                <p className="card-text">Add new vehicle to get more shipments</p>
                <a href="/itaddvehicle" className="btn btn-custom mx-3">
                  <strong>Add</strong>
                </a>
                <a href="/itviewvehicle" className="btn btn-custom">
                  <strong>View/Update</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Pending Shipments</h5>
                <p className="card-text">Shipment arriving in 5 days</p>
                <a href="/ITViewShipment" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Completed Shipments</h5>
                <p className="card-text">Look at your previous completed tasks</p>
                <a href="/ITViewShipment" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default DashboardIT;
