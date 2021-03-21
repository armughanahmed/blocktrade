import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import "./ITAssignITShipmentCard.css";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class ITAssignITShipmentCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          country: "Pakitan",
          city: "Karachi",
          type: "Truck",
        },
        {
          country: "Pakitan",
          city: "Karachi",
          type: "Truck",
        },
        {
          country: "Pakitan",
          city: "Karachi",
          type: "Truck",
        },
        {
          country: "Pakitan",
          city: "Karachi",
          type: "Truck",
        },
      ],
      table: true,
      documentsView: false,
      detailsView: false,
      selectedConsignmentId: "",
    };
  }
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FFF",
            width: "60px",
            align: "center",
            margin: "0px 15px",
            padding: 0,
          },
        },
      },
    });

  render() {
    const columns = [
      {
        name: "country",
        label: "Country",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "city",
        label: "City",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "type",
        label: "Type",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "",
        label: "Remove",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-danger btn-sm removeBut"
                onClick={(e) => this.viewDetail(e, id)}
              >
                -Delete
              </button>
            );
          },
        },
      },
    ];

    const options = {
      selectableRows: false,
      rowsPerPage: 10,
      // filter : false,
      // print: false,
      // download: false,
      viewColumns: false,
      responsive: "standard",
    };

    return (
      <div id="track-card">
        <div className="card ">
          <div className="card-body">
            <div className="text-center">
              <h2>
                <strong>Add Vehicle</strong>
              </h2>
            </div>

            <div class="form-group">
              <label for="sel1">Vehicle Type:</label>
              <select class="form-control">
                <option valuesearch="">Select category</option>
                <option valuesearch="">Truck</option>
                <option valuesearch="">Railway</option>
                <option valuesearch="">Barge</option>
                <option valuesearch="">Feeder</option>
              </select>
            </div>

            <div class="form-group">
              <label for="sel1">Model:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Model"
              />
            </div>

            <div class="form-group">
              <label for="sel1">Make:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Make"
              />
            </div>

            <div class="form-group">
              <label for="sel1">Year:</label>
              <select class="form-control">
                <option valuesearch="">Select category</option>
                <option valuesearch="">1998</option>
                <option valuesearch="">1999</option>
                <option valuesearch="">2000</option>
                <option valuesearch="">2001</option>
                <option valuesearch="">2002</option>
                <option valuesearch="">2003</option>
                <option valuesearch="">2004</option>
                <option valuesearch="">2005</option>
                <option valuesearch="">2006</option>
                <option valuesearch="">2007</option>
                <option valuesearch="">2008</option>
                <option valuesearch="">2009</option>
                <option valuesearch="">2010</option>
                <option valuesearch="">2011</option>
                <option valuesearch="">2012</option>
                <option valuesearch="">2013</option>
                <option valuesearch="">2014</option>
                <option valuesearch="">2015</option>
                <option valuesearch="">2016</option>
                <option valuesearch="">2017</option>
                <option valuesearch="">2018</option>
                <option valuesearch="">2019</option>
                <option valuesearch="">2020</option>
                <option valuesearch="">2021</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Distance Travelled (km):</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Distance"
              />
            </div>

            <br />

            <div className="text-right">
              <button className="btn btn-custom">+Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ITAssignITShipmentCard;
