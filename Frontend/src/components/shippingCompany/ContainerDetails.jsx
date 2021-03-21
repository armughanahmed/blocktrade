import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import MUIDataTable from "mui-datatables";

class ContainerDetails extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            data : [
                { id: 1, packageType: "Boxes", packageCount: 100, length: 150, width: 250, height: 100, weight: 850},
                { id: 2, packageType: "Boxes", packageCount: 100, length: 150, width: 250, height: 100, weight: 850 },
                { id: 3, packageType: "Boxes", packageCount: 100, length: 150, width: 250, height: 100, weight: 850 },
                { id: 4, packageType: "Boxes", packageCount: 100, length: 150, width: 250, height: 100, weight: 850 },
            ],
        }
    }

    render() {
        const columns = [
            {
                name: "id",
                label: "Consignment id",
                options: {
                 filter: true,
                 sort: true,
                }
               },
            {
             name: "packageType",
             label: "Package type",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "packageCount",
             label: "Package count",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "length",
             label: "Length",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "width",
             label: "Width",
             options: {
              filter: true,
              sort: false,
             },
            },
            {
                name: "height",
                label: "Height",
                options: {
                 filter: true,
                 sort: false,
                },
                
               },
               
               {
                name: "weight",
                label: "Weight",
                options: {
                 filter: true,
                 sort: false,
                }
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
            <div>
                        
                        <MUIDataTable
                        title={"Container"}
                        data={this.state.data}
                        columns={columns}
                        options={options}
                        />
                
            </div>
            
                    
                
                    
        
        )
    }
}

export default ContainerDetails