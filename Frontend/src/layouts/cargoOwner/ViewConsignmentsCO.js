import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";
import './ViewConsignmentsCO.css'
import ViewDocumentsCard from '../../components/cargoOwner/ViewDocumentsCard'
import ViewDetailsCards from '../../components/cargoOwner/ViewDetailsCards'

class ViewConsignmentsCO extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status: "completed" },
                { id: 2, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
                { id: 3, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
                { id: 4, name: "Electronics", origin: "Karachi", destination: "Dubai", lastCheckpoint: "Gwadar", estimatedArrival:"25-12-2020", status:"abc" },
            ],
            table: true,
            documentsView: false,
            detailsView: false,
            selectedConsignmentId: ''
        }
        this.viewDocument = this.viewDocument.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    viewDocument(event,id){
        console.log(id);
        this.setState({
            table: false,
            documentsView: true,
            detailsView: false,
            selectedConsignmentId: id
        })
    }

    viewDetail(event,id){
        console.log(id);
        this.setState({
            table: false,
            documentsView: false,
            detailsView: true,
            selectedConsignmentId: id
        })
    }

    render() {
        const columns = [
            {
                name: "id",
                label: "id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "name",
             label: "Name",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "origin",
             label: "Origin",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "destination",
             label: "Destination",
             options: {
              filter: true,
              sort: false,
             }
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
                      <button className="btn btn-primary btn-sm" onClick={(e) => this.viewDocument(e,id)}>
                       View documents
                      </button>
                    );}
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
                      <button className="btn btn-primary btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
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
                        title={"Consignments"}
                        data={this.state.data}
                        columns={columns}
                        options={options}
                        />
                    }
                    {
                        this.state.documentsView === true &&
                        <ViewDocumentsCard/>
                    }
                     {
                        this.state.detailsView === true &&
                        <ViewDetailsCards/>
                    }
                    
                </div>
                <Footer/>
            </div>  
        )
    }
}

export default ViewConsignmentsCO


