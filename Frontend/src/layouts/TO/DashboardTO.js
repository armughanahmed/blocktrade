import React from "react";
import NavbarTO from "../../components/NavbarTO";
import Footer from "../../components/Footer";
import "./DashboardTO.css";
import { Redirect } from "react-router-dom";

function DashboardTO() {
  return (
    <div className="wrapper">
      <NavbarTO />
      <div className="container-fluid" id="card-section">
        <div className="row text-center">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
            <div className="card" id="track-card">
              <div className="card-body">
                <h5 className="card-title">Search Consignment</h5>
                <p className="card-text">
                  Find your required consignment by id
                </p>
                <a href="/TOSearch" className="btn btn-custom">
                  <strong>Search</strong>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body py-0">
                <h5 className="card-title">View Schedules</h5>
                <div className="row"></div>
                <p className="card-text">View progress of schedules</p>
                <a
                  href="/TOViewLoading"
                  className="btn btn-custom col-lg-5 mx-2"
                >
                  <strong>View Loading Schedules</strong>
                </a>
                <a
                  href="/TOViewUnloading"
                  className="btn btn-custom col-lg-5 mx-2"
                >
                  <strong>View Unloading Schedules</strong>
                </a>

                <a href="/TOViewAllSch"
                 className="btn btn-custom my-2">
                  <strong>View All</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card bigcard">
              <div className="card-body bigcard">
                <h5 className="card-title">Yard Info</h5>
                <p className="card-text">Easily manage your Yards </p>
                <a href="/TOAddYard" className="btn btn-custom mx-2">
                  <strong>Add Yard</strong>
                </a>
                <a href="/TOViewYard" className="btn btn-custom mx-2">
                  <strong>View Yard</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Berth Info</h5>
                <p className="card-text">Manage your Berths</p>
                <a href="/TOAddBerth" className="btn btn-custom mx-2">
                  <strong>Add Berth</strong>
                </a>
                <a href="/TOViewBerth" className="btn btn-custom mx-2">
                  <strong>View Berth</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Schedule Requests</h5>
                <p className="card-text">Approve request for schedules</p>
                <a href="/TOViewSchReq" className="btn btn-custom">
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

export default DashboardTO;
