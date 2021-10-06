import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";

class ViewQuotations extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status: "completed" },
                { id: 2, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
                { id: 3, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
                { id: 4, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
            ],
            table: true
        }
    }

    render() {
        const columns = [
            {
                name: "id",
                label: "Quotation id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "originCity",
             label: "Origin city",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "originCountry",
             label: "Origin country",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "destinationCity",
             label: "Destination city",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "destinationCountry",
             label: "Destination country",
             options: {
              filter: true,
              sort: false,
             },
            },
            {
                name: "estimatedDeparture",
                label: "Estimated departure",
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
                name: "details",
                label: "Details",
                
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                     let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm" onClick={(e) => this.viewDocument(e,id)}>
                       View details
                      </button>
                    );}
                },
                
               },
               {
                name: "status",
                label: "Status",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue)  => {
                     //console.log(tableMeta.rowData[7]);
                     if (tableMeta.rowData[8]=== "completed") {
                        return (
                            <span className="badge badge-info">Completed</span>
                        );
                     }
                      else{
                        return (
                             <span className="badge badge-warning">In progress</span>
                        );
                      }
                   }
                },
                
               },
               {
                name: "approveCancel",
                label: "Approval",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
                      Approve/Cancel
                      </button>
                    );}
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
                <NavbarCO/> 
                <div className="container-fluid" id="consignments-table">
                    {
                        this.state.table === true &&
                        <MUIDataTable
                        title={"Quotations"}
                        data={this.state.data}
                        columns={columns}
                        options={options}
                        />
                    }
                   
                    
                </div>
                <Footer/>
            </div>  
        )
    }
}

export default ViewQuotations