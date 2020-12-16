import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LCSearchCard.css'

class LCSeachCard extends PureComponent {
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
                            <h6>Seach Letter of Credit</h6>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Search by:</label>
                            <select class="form-control">
                                <option valuesearch="">Select search option</option>
                                <option valuesearch="consignment-id">Consignment ID</option>
                                <option valuesearch="document-id">Document ID</option>
                            </select>
                        </div> 

                        <div>
                            <label htmlFor="">Search LC by id:</label>
                            <input type="text" className="form-control" placeholder="Enter ID"/> 
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

export default LCSeachCard