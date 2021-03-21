import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import "./CuAssignTaxCard.css";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class CuAssignTaxCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "GST",
          mode: "Import",
          country: "Pakistan",
          hscode: "HS-10",
          percentage: "12",
          dateadded: "25-12-2020",
          taxpayer: "Importer",
          status: "Completed",
        },
        {
          id: 2,
          name: "Sales Tax",
          mode: "Export",
          country: "China",
          hscode: "HS-10",
          percentage: "1",
          dateadded: "25-12-2020",
          taxpayer: "Exporter",
          status: "Completed",
        },
        {
          id: 3,
          name: "Regulatory Tax",
          mode: "Import",
          country: "Pakistan",
          hscode: "HS-10",
          percentage: "10",
          dateadded: "25-12-2020",
          taxpayer: "Importer",
          status: "Completed",
        },
        {
          id: 4,
          name: "Income Tax",
          mode: "Import",
          country: "India",
          hscode: "HS-10",
          percentage: "5",
          dateadded: "25-12-2020",
          taxpayer: "Exported",
          status: "Completed",
        },
      ],
      table: true,
      documentsView: false,
      detailsView: false,
      selectedConsignmentId: "",
    };
  }
  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FFF",
          width: "50px",
          align: "center",
          margin: 0,
          padding: 0
        }
      }
    }
  })

  render() {
    const columns = [
      {
        name: "id",
        label: "Tax id",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "name",
        label: "Tax Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "mode",
        label: "Mode",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "country",
        label: "Country",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "hscode",
        label: "HS Code",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "percentage",
        label: "Tax Percent",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "dateadded",
        label: "Date added",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "taxpayer",
        label: "Tax Payer",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "add",
        label: "Add",
        options: {
         filter: true,
         sort: false,
         customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button className="btn btn-danger btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
               +Add
              </button>
            );}
        },
        
       }

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
          <div id="showtax" className="col-lg-6">
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
            
          </div>

          <div className="card col-lg-6">
            <div className="card-body">
              <div className="text-center">
                <h2>
                  <strong>Assign Tax</strong>
                </h2>
              </div>

              <div class="form-group">
                <label for="sel1">Tax Type:</label>
                <select class="form-control">
                  <option valuesearch="">Select type</option>
                  <option valuesearch="">GST</option>
                  <option valuesearch="">Regulatory</option>
                  <option valuesearch="">Sales</option>
                  <option valuesearch="">Income</option>
                </select>
              </div>

              <div class="form-group">
                <label for="sel1">Category :</label>
                <select class="form-control">
                  <option valuesearch="">Select category</option>
                  <option valuesearch="">Electronics</option>
                  <option valuesearch="">Clothing</option>
                  <option valuesearch="">Food</option>
                </select>
              </div>

              <div>
                <label htmlFor="">HS Code:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter HS Code. For ex. HS-010"
                />
              </div>

              <div>
                <label For="">Taxes:</label>
                <textarea
                  class="form-control"
                  id=""
                  rows="5"
                  placeholder="All tax applicable"
                ></textarea>
              </div>

              <br />
              
              

              <div className="text-right">
                <button className="btn btn-custom">Confirm</button>
              </div>
            
            </div>
          </div>
      </div>
    );
  }
}

export default CuAssignTaxCard;
