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
          berthid: 1,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "3",
          status: "free",
        },
        {
          berthid: 2,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "2",
          status: "scheduled",
        },
        {
          berthid: 3,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "4",
          status: "loading",
        },
        {
          berthid: 4,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "3",
          status: "loading",
        },
        {
          berthid: 5,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "2",
          status: "free",
        },
        {
          berthid: 6,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "3",
          status: "loading",
        },
        {
          berthid: 7,
          length: "400",
          width: "200",
          date_added: "12-1-2021",
          crane_count: "5",
          status: "unloading",
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
        name: "berthid",
        label: "Yard ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "length",
        label: "Total Capacity (TEUs)",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "width",
        label: "Current Capacity(TEUs)",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "date_added",
        label: "Date added",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "crane_count",
        label: "Category",
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
            if (tableMeta.rowData[5] === "free") {
              return <span className="badge badge-success">Free</span>;
            } else if (tableMeta.rowData[5] === "scheduled") {
              return <span className="badge badge-info">Scheduled</span>;
            } else if (tableMeta.rowData[5] === "loading") {
              return <span className="badge badge-secondary">Loading</span>;
            } else if (tableMeta.rowData[5] === "unloading") {
              return <span className="badge badge-primary">Unloading</span>;
            }  
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

export default TOViewLoading;
