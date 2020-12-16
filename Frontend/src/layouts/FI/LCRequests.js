import React, { PureComponent } from 'react'
import NavbarFI from '../../components/NavbarFI';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";
import './LCRequests.css'
import ViewDocumentsCard from '../../components/cargoOwner/ViewDocumentsCard'
import ViewDetailsCards from '../../components/cargoOwner/ViewDetailsCards'

class LCRequests extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, name: "Electronics", originCountry: "Pakistan", originCity: "Karachi", destinationCity: "Dubai",  destinationCountry: "UAE", lastCheckpoint: "Gwadar",  estimatedDeparture:"25-12-2020", estimatedArrival:"25-12-2020", totalCharges: 10000, status: "completed" },
                { id: 2, name: "Electronics", originCountry: "Pakistan", originCity: "Karachi", destinationCity: "Dubai",  destinationCountry: "UAE", lastCheckpoint: "Gwadar",  estimatedDeparture:"25-12-2020", estimatedArrival:"25-12-2020", totalCharges: 10000, status:"abc" },
                { id: 3, name: "Electronics", originCountry: "Pakistan", originCity: "Karachi", destinationCity: "Dubai",  destinationCountry: "UAE", lastCheckpoint: "Gwadar",  estimatedDeparture:"25-12-2020", estimatedArrival:"25-12-2020", totalCharges: 10000, status:"abc" },
                { id: 4, name: "Electronics", originCountry: "Pakistan", originCity: "Karachi", destinationCity: "Dubai",  destinationCountry: "UAE", lastCheckpoint: "Gwadar",  estimatedDeparture:"25-12-2020", estimatedArrival:"25-12-2020", totalCharges: 10000, status:"abc" },
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
                name: "totalCharges",
                label: "Total charges",
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
                label: "Status" ,
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
                label: "Upload LC",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
                      Upload
                      </button>
                    );}
                },
                
               },
               {
                name: "Reject",
                label: "Reject LC",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-danger btn-sm" >
                      Delete
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
                <NavbarFI/> 
                <div className="container-fluid" id="consignments-table">
                    {
                        this.state.table === true &&
                        <MUIDataTable 
                        title={"Quotations"}
                        data={this.state.data}
                        columns={columns } 
                        options={options}
                        />
                    }
                   
                    
                </div>
             
            </div>  
        )
    }
}

export default LCRequests
