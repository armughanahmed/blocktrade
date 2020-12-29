import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CuSearchCard.css'

class CuSearchCard extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="track-card">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <h6>Search Consignments</h6>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Search by:</label>
                            <select class="form-control">
                                <option valuesearch="">Select search option</option>
                                <option valuesearch="consignment-id">Consignment ID</option>
                                <option valuesearch="container-id">Container ID</option>
                                <option valuesearch="shipment-id">Shipment ID</option>
                                <option valuesearch="Port-id">Port ID</option>
                                <option valuesearch="Cargoowner-id">Cargo Owner ID</option>
                            </select>
                        </div> 

                        <div>
                            <label htmlFor="">Enter ID:</label>
                            <input type="text" className="form-control" placeholder="Enter ID to search"/> 
                        </div>
                        
                        
                        <br/>
                    <div className="text-center">
                        <button className="btn btn-custom">Search</button>
                    </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default CuSearchCard