import React from 'react'
import './CreateShipment.css'

function CreateShipment() {
    return (
        <div id="create-shipment-view">
            <div className="container">
                    <div className="details">
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Non assigned consignments:</label>
                            </div>
                            <div className="col-lg-5">
                                <div class="form-group">
                                    <select class="form-control" id="sel1" required>
                                        <option value="">Select consignment</option>
                                        <option value="consg_id">Open LCL</option>
                                        <option value="consg_id">Open FCL</option>
                                    </select>
                                </div> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Container type:</label>
                            </div>
                            <div className="col-lg-5">
                                <div class="form-group">
                                    <select class="form-control" id="sel2" required>
                                        <option value="">Select container type</option>
                                        <option value="consg_id">Dry storage</option>
                                        <option value="consg_id">Flat rack</option>
                                        <option value="consg_id">Open top</option>
                                        <option value="consg_id">Tunnel</option>
                                        <option value="consg_id">Open side storage</option>
                                        <option value="consg_id">Double door</option>
                                        <option value="consg_id">Refrigrated ISO</option>
                                    </select>
                                </div> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Booked containers unfilled:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Category:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Pickup:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                            
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Inland transporter:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                            
                            </div>
                            <div className="col-lg-5">
                            <textarea cols="79" className="form-control" placeholder="Enter pickup address"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Deliver:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                            
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                                <label>Inland transporter:</label>
                            </div>
                            <div className="col-lg-5">
                                <input className="form-control"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                            
                            </div>
                            <div className="col-lg-5">
                            <textarea cols="79" className="form-control" placeholder="Enter delivery address"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 offset-lg-2">
                            <label>Documents: </label>
                            </div>
                            <div className="col-lg-3">
                            <button class="btn btn-primary">+ Add Document</button>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-custom">Confirm shipment</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default CreateShipment
