import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import "./ITAddRouteCard.css";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class ITAddRouteCard extends PureComponent {
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
      <div id="track-card" className="container-lg row">
        <div className="card col-lg-6">
          <div className="card-body">
            <div className="text-center">
              <h2>
                <strong>Next Destination</strong>
              </h2>
            </div>

            <div>
              <label htmlFor="">Country:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Country"
              />
            </div>

            <div>
              <label htmlFor="">City:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter City"
              />
            </div>

            <div class="form-group">
              <label for="sel1">Type :</label>
              <select class="form-control">
                <option valuesearch="">Select category</option>
                <option valuesearch="">Truck</option>
                <option valuesearch="">Railway</option>
                <option valuesearch="">Barge</option>
                <option valuesearch="">Feeder</option>
              </select>
            </div>

            <div className="addressBox">
              <label For="">Pick Address:</label>
              <textarea
                class="form-control"
                id=""
                rows="5"
                placeholder="Enter the address"
              ></textarea>
            </div>

            <div>
              <label For="">Drop Address:</label>
              <textarea
                class="form-control"
                id=""
                rows="5"
                placeholder="Enter the address"
              ></textarea>
            </div>

            <br />

            <div className="text-right">
              <button className="btn btn-custom">+Add</button>
            </div>
          </div>
        </div>

        <div id="showtax" className="col-lg-6">
          <div className="card">
          <h2>
                <strong>Route:</strong>
              </h2>
            <div id="consignments-table">
              <MuiThemeProvider theme={this.getMuiTheme()}>
                {this.state.table === true && (
                  <MUIDataTable
                    title={"Saved Tax"}
                    data={this.state.data}
                    columns={columns}
                    options={options}
                  />
                )}
              </MuiThemeProvider>
            </div>

            <div className="text-right">
              <button className="btn btn-custom">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ITAddRouteCard;
