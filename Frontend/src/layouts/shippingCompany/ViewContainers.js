import React, { PureComponent } from 'react'
import MUIDataTable from "mui-datatables";
import ContainerDetails from '../../components/shippingCompany/ContainerDetails'

class ViewContainers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, containerType: "Dry storage", containerSize: "45ft", origin: "Dubai", arrival: "Gwadar", shipId:"1", status: "completed" },
                { id: 2, containerType: "Dry storage", containerSize: "45ft", origin: "Dubai", arrival: "Gwadar", shipId:"1", status:"abc" },
                { id: 3, containerType: "Dry storage", containerSize: "45ft", origin: "Dubai", arrival: "Gwadar", shipId:"1", status:"abc" },
                { id: 4, containerType: "Dry storage", containerSize: "45ft", origin: "Dubai", arrival: "Gwadar", shipId:"1", status:"abc" },
            ],
            table: true,
            containerDetails: false,
            selectedConsignmentId: ''
        }
    }

    viewDetail(event,id){
        this.setState({
            table: false,
            containerDetails: true
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
             name: "containerType",
             label: "Container type",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "containerSize",
             label: "Container size",
             options: {
              filter: true,
              sort: false,
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
             name: "arrival",
             label: "Arrival",
             options: {
              filter: true,
              sort: false,
             },
            },
            {
                name: "shipId",
                label: "Ship id",
                options: {
                 filter: true,
                 sort: false,
                },
                
               },
               
               {
                name: "conatainer",
                label: "Container",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm"  onClick={(e) => this.viewDetail(e,id)}>
                       View container
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
                <div className="container-fluid" id="consignments-table">
                    {
                        this.state.table === true &&
                        <MUIDataTable
                        title={"Containers"}
                        data={this.state.data}
                        columns={columns}
                        options={options}
                        />
                    }
                     {
                        this.state.containerDetails === true &&
                        <ContainerDetails/>
                    }
                    
                </div>
            </div>  
        )
    }
}


export default ViewContainers