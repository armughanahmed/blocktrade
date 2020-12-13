import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
            consignments1: []
        }
    }

   

    childCallback = () =>{
        this.setState({
            mode: '',
            movementType: ''
        });
    }

    updateMode(event) {
       this.setState({mode: event.target.value});
    }

    updateMovementType(event){
        this.setState({movementType: event.target.value})
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

    sendConsignments =()=> {
        this.props.getConsignments(this.state.consignments,this.state.consignments1)
    }

    renderComponent(){
       
        if (this.state.mode === 'open-lcl' && this.state.movementType !== '') {
           
            return( <div>
                 
                 <OpenLcl mode={this.state.mode} movementType={this.state.movementType} consignments={this.state.consignments} childCallback={this.childCallback} />
            </div> )
                
        }
        else if (this.state.mode === 'open-fcl' && this.state.movementType !== '') {
        
            return <OpenFcl mode={this.state.mode} movementType={this.state.movementType} consignments1={this.state.consignments1} childCallback={this.childCallback} />
        }
    }
    

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
                                        <option value="open-lcl">Open LCL</option>
                                        <option value="open-fcl">Open FCL</option>
                                    </select>
                                </div> 
                            </div>
                            <div className="col-lg-6">
                                <div class="form-group">
                                        <label for="sel2">Movement type:</label>
                                        <select class="form-control" id="sel2" value={this.state.movementType} onChange={(e) => this.updateMovementType(e)} required>
                                            <option value="">Select movement type</option>
                                            <option value="d2d">Door to Door</option>
                                            <option value="p2d">Port to Door</option>
                                            <option value="d2p">Door to Port</option>
                                            <option value="p2p">Port to Port</option>
                                        </select>
                                </div> 
                            </div>
                        </div>
                        
                    </form>
                    {this.renderComponent()}
                    {this.state.consignments.length > 0 &&
                    <div className="main-added-consignments">
                         <h3>Open LCLs</h3>
                    <div className="row">
                        {this.state.consignments.map((con) => (
                          this.displayLcl(con)  
                        ))}
                    </div> 
                    </div> 
                    }
                    {this.state.consignments1.length > 0 &&
                     <div className="main-added-consignments">
                         <h3>Open FCLs</h3>
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