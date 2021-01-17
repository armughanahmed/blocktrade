import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import MUIDataTable from "mui-datatables";
import axios from 'axios';

class ViewQuotations extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [],
            table: true
        }
    }

    componentDidMount(){
        this.getQuotation();
    }

     async document(id){
         //alert('bhai');
        const token = localStorage.getItem('token');
        console.log(id);
        const obj = {
            document_id: id
        }
        console.log(obj);
        try{
            const response = await axios.post('http://localhost:4000/cargo-owner/getQuotationDocument',obj,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response);
            if (response.status === 202) {
                var url = `http://127.0.0.1:8080/${response.data.data}`;
                window.open(url,null);
            }
        }

        catch(e){
            console.log(e.response);
        }

    }

    async approve(id){
        const token = localStorage.getItem('token');
        const obj = {
            quotation_id: id
        }
        try{
            const response = await axios.post('http://localhost:4000/cargo-owner/approve-quotation',obj,{
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

    async reject(id){
        const token = localStorage.getItem('token');
        const obj = {
            quotation_id: id
        }
        try{
            const response = await axios.post('http://localhost:4000/cargo-owner/reject-quotation',obj,{
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

    async getQuotation(){
        const token = localStorage.getItem('token');
        try{
            const response = await axios.get('http://localhost:4000/cargo-owner/view-quotations',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data.data);
            let temp = [];
            for (let index = 0; index < response.data.data.length; index++) {
                const element = response.data.data[index];
                //console.log(element.quotations);
                //console.log(element.schedule); 
                const obj = {
                    id: element.quotations.quotation_id,
                    originCountry: element.schedule.origin_country, 
                    originCity: element.schedule.origin_city,
                    destinationCity: element.schedule.destination_city,
                    destinationCountry: element.schedule.destination_country,
                    estimatedDeparture: element.schedule.departure_date,
                    estimatedArrival: element.schedule.arrival_date,
                    totalCharges: element.quotations.price,
                    document: element.quotations.document_id,
                    status: element.quotations.quote_status,
                }
                console.log(obj);  
                temp.push(obj);
            }
            this.setState({
                data: temp
            })
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
                     let doc_id = tableMeta.rowData[8];
                     //console.log(doc_id);
                     if (tableMeta.rowData[9]=== "pending") {
                        return (
                            <button className="btn btn-primary btn-sm" disabled>
                             Download
                            </button>
                        );
                     }
                     else{
                        return (
                            <button className="btn btn-primary btn-sm" onClick= {() => this.document(doc_id)}> 
                             Download
                            </button>
                        );
                     }
                  }
                },
                
               },
               {
                name: "status",
                label: "Status",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue)  => {
                     console.log(tableMeta);
                     if (tableMeta.rowData[9]=== "pending") {
                        return (
                            <span className="badge badge-info text-center">Pending</span>
                        );
                     }
                      else{
                        return (
                             <span className="badge badge-warning">Waiting</span>
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
                    if (tableMeta.rowData[9]=== "pending") {
                        return (
                            <button className="btn btn-primary btn-sm" disabled>
                            Approve
                            </button>
                          );
                    }
                    else{
                        return (
                            <button className="btn btn-primary btn-sm" onClick={() => this.approve(id)}>
                            Approve
                            </button>
                          );
                    }
                  }
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
                            <button className="btn btn-danger btn-sm" onClick={() => this.reject(id)}>
                            Cancel
                            </button>
                        );
                    
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