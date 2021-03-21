import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CuAllowCard.css'

class CuAllowCard extends PureComponent {
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
                            <h6>Move consignment</h6>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Move to:</label>
                            <select class="form-control">
                                <option valuesearch="">Select destiantion type</option>
                                <option valuesearch="">Port warehouse</option>
                                <option valuesearch="">Custom warehouse</option>
                                <option valuesearch="">Destination</option>
                            </select>
                        </div>

                        <div>
                            <label For="">Address:</label>
                            <textarea class="form-control" id="" rows="5" placeholder="Enter address"></textarea>
                        </div>
                        
                        
                        <br/>
                    <div className="text-center">
                        <button className="btn btn-custom">Confirm Clearence</button>
                    </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default CuAllowCard