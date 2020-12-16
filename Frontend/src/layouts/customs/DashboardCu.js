import React from "react";
import NavbarCu from "../../components/NavbarCu";
import Footer from "../../components/Footer";
import "./DashboardCu.css";
import { Redirect } from "react-router-dom";

function DashboardCu() {
  return (
    <div className="wrapper">
      <NavbarCu />
      <div className="container-fluid" id="card-section">

        <div className="row text-center">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
            <div className="card" id="track-card">
              <div className="card-body">
                <h5 className="card-title">Search Consignment</h5>
                <p className="card-text">Find your required consignment by id</p>
                <a href="/CuSearch" className="btn btn-custom">
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
                <h5 className="card-title">View Pending Consignments</h5>
                <p className="card-text">Available upcoming containers</p>
                <a href="/ViewConsignmentsCu" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Update Tax</h5>
                <p className="card-text">Add/Update tax for quick evaluation</p>
                <a href="/cuaddtax" className="btn btn-custom mx-3">
                  <strong>Add</strong>
                </a>
                <a href="/cuviewtax" className="btn btn-custom">
                  <strong>View/Update</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Cleared Consignments</h5>
                <p className="card-text">Cleared shipments</p>
                <a href="/ViewConsignmentsCu" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Upcoming Shipments</h5>
                <p className="card-text">Shipment arriving in 5 days</p>
                <a href="/ViewConsignmentsCu" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Tax Pending Consignments</h5>
                <p className="card-text">Previous letter of credit</p>
                <a href="/ViewConsignmentsCu" className="btn btn-custom">
                  <strong>View</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body my-3">
                <h5 className="card-title">View All Shipments</h5>
                <p className="card-text">View all shipments</p>
                <a href="/ViewConsignmentsCu" className="btn btn-custom">
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

export default DashboardCu;
