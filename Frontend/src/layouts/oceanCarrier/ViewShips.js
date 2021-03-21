import React, { PureComponent } from 'react'
import MUIDataTable from "mui-datatables";
import NavbarOC from '../../components/NavbarOC'

class ViewShips extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, shipType: "Panamax", distanceTravelled: 5000, captainId: 123, status: "completed" },
                { id: 2, shipType: "Panamax", distanceTravelled: 5000, captainId: 123, status:"abc" },
                { id: 3, shipType: "Panamax", distanceTravelled: 5000, captainId: 123, status:"abc" },
                { id: 4, shipType: "Panamax", distanceTravelled: 5000, captainId: 123, status:"abc" },
            ],
            table: true,
            documentsView: false,
            detailsView: false,
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
             name: "shipType",
             label: "Ship type",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "distanceTravelled",
             label: "Distance travelled",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "captainId",
             label: "Captain id",
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
                name: "ships",
                label: "Ships",
                
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                     let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm">
                       View ship details
                      </button>
                    );}
                },
                
               },
               {
                name: "routes",
                label: "Routes",
                options: {
                 filter: true,
                 sort: false,
                 customBodyRender: (value, tableMeta, updateValue) => {
                    let id = tableMeta.rowData[0];
                    return (
                      <button className="btn btn-primary btn-sm" >
                       View route details
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
                        title={"Ships"}
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
export default ViewShips



