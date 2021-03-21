import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";
import './CuViewTax.css'
import ViewDocumentsCard from '../../components/cargoOwner/ViewDocumentsCard'
import ViewDetailsCards from '../../components/cargoOwner/ViewDetailsCards'
import NavbarCu from '../../components/NavbarCu';

class CuViewTax extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, name: "GST", mode: "Import", country: "Pakistan", hscode: "HS-10", percentage: "12", dateadded:"25-12-2020", taxpayer: "Importer", status: "Completed" },
                { id: 2, name: "SALES TAX", mode: "Export", country: "China",hscode: "HS-10", percentage: "1", dateadded:"25-12-2020", taxpayer:"Exporter", status: "Completed" },
                { id: 3, name: "REGULATORY TAX", mode: "Import", country: "Pakistan",hscode: "HS-10", percentage: "10", dateadded:"25-12-2020", taxpayer:"Importer", status: "Completed" },
                { id: 4, name: "INCOME TAX", mode: "Import", country: "India",hscode: "HS-10", percentage: "5", dateadded:"25-12-2020", taxpayer:"Exported", status: "Completed" },
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
                label: "Tax id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "name",
             label: "Tax Name",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "mode",
             label: "Mode",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "country",
             label: "Country",
             options: {
              filter: true,
              sort: false,
             }
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
             label: "Tax Percentage",
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
                name: "documents",
                label: "Update",
                
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                     let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm" onClick={(e) => this.viewDocument(e,id)}>
                      Update
                      </button>
                    );}
                },
                
               },
               {
                name: "details",
                label: "Delete",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-danger btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
                       Delete
                      </button>
                    );}
                },
                
               },
               
               {
                name: "details",
                label: "Details" ,
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
                       View
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
                <NavbarCu/>
                <div className="container-fluid" id="consignments-table" class="col-xs-7 col-centered" >
                    {
                        this.state.table === true &&
                        <MUIDataTable
                        title={"Saved Tax"}
                        data={this.state.data}
                        columns={columns }
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
            </div>  
        )
    }
}

export default CuViewTax


