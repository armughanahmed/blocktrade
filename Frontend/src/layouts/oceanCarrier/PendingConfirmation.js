import React, { PureComponent } from 'react'
import MUIDataTable from "mui-datatables";
import NavbarOC from '../../components/NavbarOC'
import axios from 'axios'
import Success from '../Success';
import Failure from '../Failure';

class PendingConfirmation extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [],
            accepted: false,
            rejected: false,
        }
        
    }

    componentDidMount(){
        this.getRequests();
    }

    async getRequests(){

        const token = localStorage.getItem('token');
        const obj = {
        }

        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/getContainerBookingRequest',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);    
        this.setState({
            data: response.data.data
        })     
       
       }
        catch(e){
         console.log(e.response);
        } 
    }

    async accept(event,id){
        this.setState({
            accepted: false
        })
        event.preventDefault();
        const token = localStorage.getItem('token');
        const obj = {
            bRequest_id: id
        }

        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/acceptBookingRequest',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);  
        if(response.status === 202){  
            this.setState({
                accepted: true
            })
        }
       }
        catch(e){
         console.log(e.response);
        } 
    }

    async reject(event,id){
        this.setState({
            rejected: false
        })
        event.preventDefault();
        const token = localStorage.getItem('token');
        const obj = {
            bRequest_id: id
        }

        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/rejectBookingRequest',obj,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);    
        if(response.status){
            this.setState({
                rejected: true
            })
        }
       }
        catch(e){
         console.log(e.response);
        } 
    }

    render() {
        const columns = [
            {
                name: "bRequest_id",
                label: "Request id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "shipping_company_id",
             label: "Shipping company",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
                name: "container_id",
                label: "Container id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "booking_till",
             label: "Booking till",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
                name: "status",
                label: "Status",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue)  => {
                     //console.log(tableMeta.rowData);
                     if (tableMeta.rowData[4]=== 1) {
                        return (
                            <span className="badge badge-info">Accepted</span>
                        );
                     }
                      else{
                        return (
                             <span className="badge badge-warning">Pending</span>
                        );
                      }
                   }
                },
                
               },
               {
                name: "accept",
                label: "Accept",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    if (tableMeta.rowData[4]=== 1) {
                        return (
                            <button className="btn btn-primary btn-sm" disabled>
                            Accept
                            </button>
                          );
                    }
                    else{
                        return (
                            <button className="btn btn-primary btn-sm" onClick={(e) => this.accept(e,id)}>
                            Accept
                            </button>
                          );
                    }
                   }
                },
                
               },
               {
                name: "reject",
                label: "Reject",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    if (tableMeta.rowData[4]=== 1) {
                    return (
                      <button className="btn btn-danger btn-sm" disabled>
                       Reject
                      </button>
                    );
                    }
                    else{
                        return (
                            <button className="btn btn-danger btn-sm" onClick={(e) => this.reject(e,id)}>
                             Reject
                            </button>
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
                <NavbarOC/>
                    <div className="container-fluid" id="consignments-table">
                        <MUIDataTable
                            title={"Pending requests"}
                            data={this.state.data}
                            columns={columns}
                            options={options}
                        />
                        {
                            this.state.accepted === true&&
                            <Success message="Booking accepted successfully!"/>
                        }
                         {
                            this.state.rejected === true&&
                            <Failure message="Booking rejected successfully!"/>
                        }
                    </div>
            </div>
        )
    }
}

export default PendingConfirmation