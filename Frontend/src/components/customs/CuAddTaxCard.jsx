import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CuAddTaxCard.css'

class CuAddTaxCard extends PureComponent {
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
                            <h6>Add Tax</h6>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Mode:</label>
                            <select class="form-control">
                                <option valuesearch="">Select mode</option>
                                <option valuesearch="">Import</option>
                                <option valuesearch="">Export</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Country:</label>
                            <input type="text" className="form-control mb-3" placeholder="Enter country"/> 
                        </div>

                        <div>
                            <label htmlFor="">Tax name:</label>
                            <input type="text" className="form-control mb-3" placeholder="Enter name"/> 
                        </div>

                        <div>
                            <label htmlFor="">HS Code:</label>
                            <input type="text" className="form-control mb-3" placeholder="Enter HS Code. For ex. HS-010"/> 
                        </div>

                        <div>
                            <label htmlFor="">Percentage on value:</label>
                            <input type="text" className="form-control mb-3" placeholder="Enter percentage"/> 
                        </div>

                        <div class="form-group">
                            <label for="sel1">Tax payer:</label>
                            <select class="form-control">
                                <option valuesearch="">Select payer</option>
                                <option valuesearch="">Importer</option>
                                <option valuesearch="">Exporter</option>
                                <option valuesearch="">Shipping Company</option>
                            </select>
                        </div>

                        <div>
                            <label For="">Tax description:</label>
                            <textarea class="form-control" id="" rows="5" placeholder="Enter brief description"></textarea>
                        </div>
                        
                        
                        <br/>
                    <div className="text-center">
                        <button className="btn btn-custom">Add tax</button>
                    </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default CuAddTaxCard