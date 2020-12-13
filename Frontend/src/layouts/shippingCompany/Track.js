import React, { PureComponent } from 'react'
import './Track.css'

class Track extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container" id="track">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <h5>Track</h5>
                                <label>Track by:</label>
                                <div class="form-group">
                                    <select class="form-control" id="sel1" required>
                                        <option value="">Track by</option>
                                        <option value="consg_id">Open LCL</option>
                                        <option value="consg_id">Open FCL</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input className="form-control" placeholder="Enter id"></input>
                                </div> 
                                <div className="text-center">
                                    <button className="btn btn-custom">Track</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Track