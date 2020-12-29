import React, { PureComponent } from "react";
import Footer from "../../components/Footer";
import MUIDataTable from "mui-datatables";
import "./TOViewLoading.css";
import ViewDocumentsCard from "../../components/cargoOwner/ViewDocumentsCard";
import ViewDetailsCards from "../../components/cargoOwner/ViewDetailsCards";
import NavbarTO from "../../components/NavbarTO";

class TOViewSchReq extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
        {
          reqid: 1,
          ocid: "1",
          origin: "Karachi, Pakistan",
          destination: "Wuhan, China",
          start_date: "13-2-2021",
          arrival_date: "10-3-2021",
          req_date: "10-3-2021",
        },
      ],
      table: true,
      documentsView: false,
      detailsView: false,
      selectedConsignmentId: "",
    };
    this.viewDocument = this.viewDocument.bind(this);
    this.viewDetail = this.viewDetail.bind(this);
  }

  viewDocument(event, id) {
    console.log(id);
    this.setState({
      table: false,
      documentsView: true,
      detailsView: false,
      selectedConsignmentId: id,
    });
  }

  viewDetail(event, id) {
    console.log(id);
    this.setState({
      table: false,
      documentsView: false,
      detailsView: true,
      selectedConsignmentId: id,
    });
  }

  render() {
    const columns = [
      {
        name: "reqid",
        label: "Request ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "ocid",
        label: "Ocean Carrier ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "origin",
        label: "Origin",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "destination",
        label: "Destination",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "start_date",
        label: "Start date",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "arrival_date",
        label: "Arrival Date",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "req_date",
        label: "Request Date",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "details",
        label: "Details",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-primary btn-sm"
                onClick={(e) => this.viewDetail(e, id)}
              >
                View details
              </button>
            );
          },
        },
      },
      {
        name: "",
        label: "Approve",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-success btn-sm"
              >
                Accept
              </button>
            );
          },
        },
      },
      {
        name: "",
        label: "Disapprove",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-danger btn-sm"
              >
               Reject
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
      <div className="wrapper">
        <NavbarTO />
        <div className="container-fluid" id="consignments-table">
          {this.state.table === true && (
            <MUIDataTable
              title={"Yards"}
              data={this.state.data}
              columns={columns}
              options={options}
            />
          )}
          {this.state.documentsView === true && <ViewDocumentsCard />}
          {this.state.detailsView === true && <ViewDetailsCards />}
        </div>
      </div>
    );
  }
}

export default TOViewSchReq;
