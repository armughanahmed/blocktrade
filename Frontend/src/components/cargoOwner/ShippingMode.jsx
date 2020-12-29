import React, { PureComponent } from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
import OpenLcl from './OpenLcl';
import OpenFcl from './OpenFcl';
import './ShippingMode.css'


class ShippingMode extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            mode: '',
            movementType: '',
            consignments: [],
<<<<<<< HEAD
            consignments1: []
=======
            consignments1: [],
            pickupCountry: '',
            pickupCity: '',
            pickupAddress: '',
            deliverCountry: '',
            deliverCity: '',
            deliverAddress: ''
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        }
    }

   

    childCallback = () =>{
        this.setState({
<<<<<<< HEAD
            mode: '',
            movementType: ''
=======
            mode: ''
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        });
    }

    updateMode(event) {
       this.setState({mode: event.target.value});
    }

    updateMovementType(event){
<<<<<<< HEAD
        this.setState({movementType: event.target.value})
=======
        this.setState({
            movementType: event.target.value,
            pickupCountry: '',
            pickupCity: '',
            pickupAddress: '',
            deliverCountry: '',
            deliverCity: '',
            deliverAddress: ''
        })
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
    }

    displayLcl(con){
        return (
            <div className="col-lg-4">
                <div className="added-consignments">
                <div className="card w-100" style={{marginTop: 30}}>
                        <div className="card-body" style={{padding: '45px'}}>
                            
                                <h5>Mode: {con.mode}</h5>
                                <p><strong>Movement type:</strong>  {con.movementType}</p>
                                <p><strong>Package type:</strong>  {con.type}</p>
                                <p><strong>Quantity:</strong>  {con.quantity}</p>
                                <p><strong>Length:</strong>  {con.length}</p>
                                <p><strong>Width:</strong>  {con.width}</p>
                                <p><strong>Height:</strong>  {con.height}</p>
                                <p><strong>Weight:</strong>  {con.weight}</p>
                        
                        </div>
                    </div>  
                </div>
        </div>
        );
    }

    displayFcl(con){
        return (
            <div className="col-lg-4">
                <div className="added-consignments">
            <div className="card w-100" style={{marginTop: 30}}>
            <div className="card-body" style={{padding: '45px'}}>
                
                    <h5>Mode: {con.mode}</h5>
                    <p><strong>Movement type:</strong>  {con.movementType}</p>
                    <p><strong>Package type:</strong>  {con.packageType}</p>
                    <p><strong>Quantity:</strong>  {con.quantity}</p>
                    <p><strong>Container size:</strong>  {con.containerHeight}</p>
                    <p><strong>Container description:</strong>  {con.containerDescription}</p>
            </div>
        </div>  
        </div>
        </div>
        );
    }

<<<<<<< HEAD
    sendConsignments =()=> {
        this.props.getConsignments(this.state.consignments,this.state.consignments1)
=======
    updatePickupCountry(event){
        this.setState({
            pickupCountry: event.target.value
        })
    }

    updatePickupCity(event){
        this.setState({
            pickupCity: event.target.value
        })
    }

    updatePickupAddress(event){
        this.setState({
            pickupAddress: event.target.value
        })
    }

    updateDeliverCountry(event){
        this.setState({
            deliverCountry: event.target.value
        })
    }

    updateDeliverCity(event){
        this.setState({
            deliverCity: event.target.value
        })
    }

    updateDeliverAddress(event){
        this.setState({
            deliverAddress: event.target.value
        })
    }

    sendConsignments =()=> {
        const obj = {
            pickupCountry: this.state.pickupCountry,
            pickupCity: this.state.pickupCity,
            pickupAddress: this.state.pickupAddress,
            deliverCountry: this.state.deliverCountry,
            deliverCity: this.state.deliverCity,
            deliverAddress: this.state.deliverAddress
        }
        console.log(obj);
        this.props.getConsignments(this.state.consignments,this.obj,this.state.consignments1)
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
    }

    renderComponent(){
       
<<<<<<< HEAD
        if (this.state.mode === 'open-lcl' && this.state.movementType !== '') {
=======
        if (this.state.mode === 'ocean-lcl') {
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
           
            return( <div>
                 
                 <OpenLcl mode={this.state.mode} movementType={this.state.movementType} consignments={this.state.consignments} childCallback={this.childCallback} />
            </div> )
                
        }
<<<<<<< HEAD
        else if (this.state.mode === 'open-fcl' && this.state.movementType !== '') {
=======
        else if (this.state.mode === 'ocean-fcl' ) {
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
        
            return <OpenFcl mode={this.state.mode} movementType={this.state.movementType} consignments1={this.state.consignments1} childCallback={this.childCallback} />
        }
    }
    
<<<<<<< HEAD
=======
    showPickupInlandDetails(){
        return(
            <div id="pickup">
                <div className="row">
                    <div className="col-lg-3 offset-lg-2">
                         <label>Pickup:</label>
                    </div>
                    <div className="col-lg-5">
                        <input className="form-control" value={this.state.pickupCountry} onChange={(e) => this.updatePickupCountry(e)} placeholder="Country"/>
                        <br/>
                     </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 offset-lg-2"></div>
                        <div className="col-lg-5">
                            <input className="form-control" value={this.state.pickupCity} onChange={(e) => this.updatePickupCity(e)} placeholder="City"/>
                            <br/>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-lg-3 offset-lg-2"></div>
                            <div className="col-lg-5">
                                <textarea cols="79" className="form-control" value={this.state.pickupAddress} onChange={(e) => this.updatePickupAddress(e)} placeholder="Enter pickup address" required></textarea>
                                <br/>
                            </div>
                        </div>
                     </div>
        )
    }

    showDestinationInlandDetails(){
        return(
        <div>
        <div className="row">
            
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Deliver:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <input className="form-control" value={this.state.deliverCountry} onChange={(e) => this.updateDeliverCountry(e)} placeholder="Country"/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                    
                                    </div>
                                    <div className="col-lg-5">
                                        <input className="form-control" value={this.state.deliverCity} onChange={(e) => this.updateDeliverCity(e)} placeholder="City"/>
                                        <br/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                    
                                    </div>
                                    <div className="col-lg-5">
                                    <textarea cols="79" className="form-control" value={this.state.deliverAddress} onChange={(e) => this.updateDeliverAddress(e)} placeholder="Enter delivery address" required></textarea>
                                    <br/>
                                    </div>
                                </div>
            </div>
        )
    }

    show(){
        return(
            <div className="row">
                <div className="col text-center" id="no-inland">
                    <p>No inland details</p>
                </div>
            </div>
            
        )
    }
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6

    render() {
        return (
            <div id="shipping-mode"> 
                <div className="card">
                    <div className="card-body">
                    <h5>How would you like to ship?</h5>
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div class="form-group">
                                    <label for="sel1">Mode:</label>
                                    <select class="form-control" id="sel1" value={this.state.mode} onChange={(e) => this.updateMode(e)} required>
                                        <option value="">Select mode</option>
<<<<<<< HEAD
                                        <option value="open-lcl">Open LCL</option>
                                        <option value="open-fcl">Open FCL</option>
=======
                                        <option value="ocean-lcl">Ocean LCL</option>
                                        <option value="ocean-fcl">Ocean FCL</option>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                                    </select>
                                </div> 
                            </div>
                            <div className="col-lg-6">
                                <div class="form-group">
                                        <label for="sel2">Movement type:</label>
<<<<<<< HEAD
                                        <select class="form-control" id="sel2" value={this.state.movementType} onChange={(e) => this.updateMovementType(e)} required>
=======
                                        <select class="form-control" id="movement-select" value={this.state.movementType} onChange={(e) => this.updateMovementType(e)} required>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                                            <option value="">Select movement type</option>
                                            <option value="d2d">Door to Door</option>
                                            <option value="p2d">Port to Door</option>
                                            <option value="d2p">Door to Port</option>
                                            <option value="p2p">Port to Port</option>
                                        </select>
                                </div> 
                            </div>
                        </div>
<<<<<<< HEAD
=======
                     
                            {
                                    this.state.movementType === "p2d" &&
                                    this.showDestinationInlandDetails() 
                                }
                                 {
                                    this.state.movementType === "d2p" &&
                                    this.showPickupInlandDetails() 
                                }

                                 {
                                    this.state.movementType === "d2d"
                                       ? [this.showDestinationInlandDetails(), this.showPickupInlandDetails()] 
                                       : null
                                }
                                {
                                    this.state.movementType === null &&
                                    this.show()
                                }
                                {
                                    this.state.movementType === "p2p" &&
                                    this.show()
                                }
                        
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                        
                    </form>
                    {this.renderComponent()}
                    {this.state.consignments.length > 0 &&
                    <div className="main-added-consignments">
<<<<<<< HEAD
                         <h3>Open LCLs</h3>
=======
                         <h3>Ocean LCLs</h3>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                    <div className="row">
                        {this.state.consignments.map((con) => (
                          this.displayLcl(con)  
                        ))}
                    </div> 
                    </div> 
                    }
                    {this.state.consignments1.length > 0 &&
                     <div className="main-added-consignments">
<<<<<<< HEAD
                         <h3>Open FCLs</h3>
=======
                         <h3>Ocean FCLs</h3>
>>>>>>> fe3be23895be1fb6986ed3493f852dac303d46c6
                    <div className="row">
                        
                        {this.state.consignments1.map((con) => (
                          this.displayFcl(con)  
                        ))}
                    </div> 
                    </div> 
                    }
                    {/* { this.state.consignments.length > 0 &&   
                        this.state.consignments.map((con) => (
                               con.mode === 'open-lcl' && 
                               this.displayLcl(con)
                               con.mode === 'open-fcl' {}
                               
                        ))}         */}
                    </div>
                    <div className="row">
                        <div className="text-center col">
                            <button className="btn btn-custom btn-sm" onClick={this.sendConsignments}>Get quote</button>
                        </div>
                    </div>
                   
                </div>
            </div>
            
        
        )
    }
}

export default ShippingMode