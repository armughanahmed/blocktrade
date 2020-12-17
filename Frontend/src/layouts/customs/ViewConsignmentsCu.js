import React, { PureComponent } from "react";
import NavbarCO from "../../components/NavbarCO";
import Footer from "../../components/Footer";
import MUIDataTable from "mui-datatables";
import "./ViewConsignmentsCu.css";
import ViewDocumentsCard from "../../components/cargoOwner/ViewDocumentsCard";
import ViewDetailsCards from "../../components/cargoOwner/ViewDetailsCards";
import NavbarCu from "../../components/NavbarCu";

class ViewConsignmentsCu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "Electronics",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "completed",
        },
        {
          id: 2,
          name: "Clothing",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "unloading",
        },
        {
          id: 3,
          name: "Food",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "upcoming",
        },
        {
          id: 4,
          name: "Jewelry",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "taxassigned",
        },
        {
          id: 5,
          name: "Architecture",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "allowed",
        },
        {
          id: 6,
          name: "Electronics",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "pending",
        },
        {
          id: 7,
          name: "Electronics",
          origin: "Karachi",
          destination: "Dubai",
          lastCheckpoint: "Gwadar",
          estimatedArrival: "25-12-2020",
          status: "completed",
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
        name: "id",
        label: "id",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "name",
        label: "Name",
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
        name: "lastCheckpoint",
        label: "Last checkpoint",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "estimatedArrival",
        label: "Estimated arrival",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "documents",
        label: "Documents",

        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-primary btn-sm"
                onClick={(e) => this.viewDocument(e, id)}
              >
                View documents
              </button>
            );
          },
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
        name: "assigntax",
        label: "Assign Tax",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <a href="/cuassigntax" className="btn btn-primary assignbtn">
                Assign
              </a>
            );
          },
        },
      },
      {
        name: "allow",
        label: "Allow",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
                <a href="/cuallow" className="btn btn-primary allowbtn">
                Allow
              </a>
            );
          },
        },
      },

      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            console.log(tableMeta.rowData[10]);
            if (tableMeta.rowData[10] === "completed") {
              return <span className="badge badge-success">Completed</span>;
            } else if (tableMeta.rowData[10] === "unloading") {
              return <span className="badge badge-info">Unloading</span>;
            } else if (tableMeta.rowData[10] === "upcoming") {
              return <span className="badge badge-secondary">Upcoming</span>;
            } else if (tableMeta.rowData[10] === "taxassigned") {
              return <span className="badge badge-primary">Tax assigned</span>;
            } else if (tableMeta.rowData[10] === "allowed") {
              return <span className="badge badge-dark">Allowed</span>;
            } else if (tableMeta.rowData[10] === "pending") {
              return <span className="badge badge-warning">Pending</span>;
            }
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
        <NavbarCu />
        <div className="container-fluid" id="consignments-table">
          {this.state.table === true && (
            <MUIDataTable
              title={"Consignments"}
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

export default ViewConsignmentsCu;
