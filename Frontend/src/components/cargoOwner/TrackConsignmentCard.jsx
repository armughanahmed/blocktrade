import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './TrackConsignmentCard.css'

class TrackConsignmentCard extends PureComponent {
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
                        <h6>Track consignment</h6>
                    </div>
                        <label htmlFor="">Track consignment by id:</label>
                        <input type="text" className="form-control" placeholder="Enter consignment id"/>
                        <br/>
                    <div className="text-center">
                        <button className="btn btn-custom">Track</button>
                    </div>
                </div>
            </div>
            </div>
           
        )
    }
}

export default TrackConsignmentCard