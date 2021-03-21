import React, { PureComponent } from 'react'
import MUIDataTable from "mui-datatables";
import NavbarOC from '../../components/NavbarOC'


class ViewContainersOC extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, containerType: "Dry storage", category:"Electronics", containerSize: "45ft", VGM: 1000, capacity: 100, shipId:"1", status: "completed" },
                { id: 2, containerType: "Dry storage", category:"Electronics", containerSize: "45ft", VGM: 1000, capacity: 100, shipId:"1", status:"abc" },
                { id: 3, containerType: "Dry storage", category:"Electronics", containerSize: "45ft", VGM: 1000, capacity: 100, shipId:"1", status:"abc" },
                { id: 4, containerType: "Dry storage", category:"Electronics", containerSize: "45ft", VGM: 1000, capacity: 100, shipId:"1", status:"abc" },
            ],
            table: true,
            containerDetails: false,
            selectedConsignmentId: ''
        }
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
                name: "category",
                label: "Category",
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
             name: "VGM",
             label: "VGM(kg)",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "capacity",
             label: "Capacity(%)",
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
                name: "document",
                label: "Document",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm">
                       View document
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
                <NavbarOC/>
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

                    
                </div>
            </div>  
        )
    }
}


export default ViewContainersOC