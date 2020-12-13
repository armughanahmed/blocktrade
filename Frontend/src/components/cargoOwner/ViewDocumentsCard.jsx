import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ViewDocumentsCard extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="text-center" id="view-documents">

           
            <div className="card text-center">
                <div className="card-body">
                    <h5>Documents</h5>
                    <br/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Category: Electronics </p>
                        </div>
                        <div className="col-lg-3 offset-lg-3">
                            <p>Uploaded by: </p>
                        </div>
                        <div className="col-lg-3">
                            <p>Date: </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Bill of ladding: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Packing list: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Cerificate of origin: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Letter of credit: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Purchase order: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-3">
                            <p>Sales invoice: </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn btn-primary btn-sm">View documents</button>
                        </div>
                        <div className="col-lg-3">
                            <p>ABC</p>
                        </div>
                        <div className="col-lg-3">
                            <p>21/11/2020</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ViewDocumentsCard