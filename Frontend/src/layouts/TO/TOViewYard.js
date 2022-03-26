import React, { PureComponent } from "react";
import NavbarCO from "../../components/NavbarCO";
import Footer from "../../components/Footer";
import MUIDataTable from "mui-datatables";
import "./TOViewLoading.css";
import ViewDocumentsCard from "../../components/cargoOwner/ViewDocumentsCard";
import ViewDetailsCards from "../../components/cargoOwner/ViewDetailsCards";
import NavbarTO from "../../components/NavbarTO";

class TOViewYard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          yardid: 1,
          total_capacity:"4000",
          current_capacity: "2000",
          date_added: "12-1-2021",
          category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
        },
        {
            yardid: 1,
            total_capacity:"4000",
            current_capacity: "2000",
            date_added: "12-1-2021",
            category: "Electronics",
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
        name: "yardid",
        label: "Yard ID",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "total_capacity",
        label: "Total Capacity (TEUs)",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "current_capacity",
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
        
        name: "category",
        label: "Category",
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

export default TOViewYard;
