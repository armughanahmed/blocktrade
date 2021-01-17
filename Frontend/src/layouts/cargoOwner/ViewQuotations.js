import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";
import axios from 'axios';

class ViewQuotations extends PureComponent {
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

    componentDidMount(){
        this.getQuotation();
    }

    async getQuotation(){
        const token = localStorage.getItem('token');
        try{
            const response = await axios.get('http://localhost:4000/cargo-owner/view-quotations',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response);
        }
        catch(e){
            console.log(e.response);
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
                name: "document",
                label: "Document",
                
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                     let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm" >
                       Download
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
                name: "approve",
                label: "Approval",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm">
                      Approve
                      </button>
                    );}
                },
                
               },
               {
                name: "cancel",
                label: "Cancel",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-danger btn-sm">
                      Cancel
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
             
            </div>  
        )
    }
}

export default ViewQuotations