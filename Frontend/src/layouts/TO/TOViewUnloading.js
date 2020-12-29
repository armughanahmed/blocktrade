import React, { PureComponent } from "react";
import NavbarCO from "../../components/NavbarCO";
import Footer from "../../components/Footer";
import MUIDataTable from "mui-datatables";
import "./TOViewLoading.css";
import ViewDocumentsCard from "../../components/cargoOwner/ViewDocumentsCard";
import ViewDetailsCards from "../../components/cargoOwner/ViewDetailsCards";
import NavbarTO from "../../components/NavbarTO";

class TOViewLoading extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          schid: 1,
          shipid:1,
          startdate: "25-12-2020",
          estimated_completion: "12-1-2021",
          start_destination: "Karachi",
          final_destination: "Wuhan",
          containers: "5000",
          berth_id: "1",
          status:"completed",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"upcoming",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"unloading",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"unloading",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"pending",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"pending",
        },
        {
            schid: 1,
            shipid:1,
            startdate: "25-12-2020",
            estimated_completion: "12-1-2021",
            start_destination: "Karachi",
            final_destination: "Wuhan",
            containers: "5000",
            berth_id: "1",
            status:"unloading",
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
        name: "schid",
        label: "Sch_ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "shipid",
        label: "Ship_ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "startdate",
        label: "Start Date",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "estimated_completion",
        label: "Estimated Completion",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "start_destination",
        label: "Start",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "final_destination",
        label: "End",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "containers",
        label: "Container",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "berth_id",
        label: "Berth ID",
        options: {
          filter: true,
          sort: false,
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
            if (tableMeta.rowData[8] === "completed") {
              return <span className="badge badge-success">Completed</span>;
            } else if (tableMeta.rowData[8] === "unloading") {
              return <span className="badge badge-info">Unloading</span>;
            } else if (tableMeta.rowData[8] === "upcoming") {
              return <span className="badge badge-secondary">Upcoming</span>;
            } else if (tableMeta.rowData[8] === "loading") {
              return <span className="badge badge-primary">Loading</span>;
            } else if (tableMeta.rowData[8] === "pending") {
              return <span className="badge badge-warning">Pending</span>;
            }
          },
        },
      },
      {
        name: "procedure",
        label: "Procedure",

        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <button
                className="btn btn-primary btn-sm"
              >
                Start unloading
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
        name: "berth",
        label: "Berth",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
              <a href="/toassignberth" className="btn btn-primary assignbtn">
                Assign Berth
              </a>
            );
          },
        },
      },
      {
        name: "yard",
        label: "Yard",
        options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            let id = tableMeta.rowData[0];
            return (
                <a href="/toassignyard" className="btn btn-primary allowbtn">
                Assign Yard
              </a>
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
        <NavbarTO/>
        <div className="container-fluid" id="consignments-table">
          {this.state.table === true && (
            <MUIDataTable
              title={"Schedules"}
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

export default TOViewLoading;
