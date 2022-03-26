import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import "./TOAssignYardCard.css";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class TOAssignYardCard extends PureComponent {
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
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FFF",
            align: "left",
            margin: "0",
            padding:"2px 10px",
           },
        },
      },
    });

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
        name: "checkbox",
        label: "Add Yard",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
                <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox2">2</label>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                </input>
              </div>
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
      <div id="track-card" className="container-lg">
        <div id="showtax" className="">
          <div id="consignments-table">
            <MuiThemeProvider theme={this.getMuiTheme()}>
              {this.state.table === true && (
                <MUIDataTable
                  title={"Ship ID"}
                  data={this.state.data}
                  columns={columns}
                  options={options}
                />
              )}
            </MuiThemeProvider>
          </div>
        </div>

        <button btn-primary btn>
            Confirm
        </button>
      </div>
    );
  }
}

export default TOAssignYardCard;
