import React from 'react'
import PropTypes from 'prop-types'

class OpenFcl extends React.Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            packageType: 'container',
            quantity: '',
            containerHeight: '',
            containerDescription: ''
        }
        this.addConsignment = this.addConsignment.bind(this);
    }

    updateQuantity(event){
        this.setState({quantity: event.target.value});
    }

    updateContainerHeight(event){
        this.setState({containerHeight: event.target.value});
    }

    updateContainerDescription(event){
        this.setState({containerDescription: event.target.value});
    }
    
    addConsignment(event){
        event.preventDefault();
        //console.log(this.state.selectedValue);
    
        const obj ={
            mode: this.props.mode,
            movementType: this.props.movementType,
            packageType: this.state.packageType,
            quantity: this.state.quantity,
            containerHeight: this.state.containerHeight,
            containerDescription: this.state.containerDescription
        };
        this.props.consignments1.push(obj);
        console.log(this.props.consignments1);
        this.setState({ 
            packageType: 'container',
            quantity: '',
            containerHeight: '',
            containerDescription: ''
        });
        this.props.childCallback();
    }

    render() {
        return (
            <div id="shipping-mode">
                <div className="card">
                    <div className="card-body">
                        <form action="#" onSubmit={this.addConsignment}>
                        <div className="row ">
                                    <div className="col-lg-2">
                                        <div className="form-group">
                                            <label for="packageType">Package type:</label>
                                            <input className="form-control" value={this.state.packageType}  type="text"  name="packageType" id="packageType" placeholder="Package type" required readOnly/>
                                        </div> 
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="form-group">
                                            <label for="quantity">Quantity:</label>
                                        <input className="form-control" value={this.state.quantity} onChange={(e) => this.updateQuantity(e)} type="number" min="1" name="quantity" id="quantity" placeholder="Quantity" required/>
                                        </div> 
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <label for="sel2">Container height:</label>
                                            <select className="form-control" id="sel2" value={this.state.containerHeight} onChange={(e) => this.updateContainerHeight(e)} required>
                                                <option value="">Select container</option>
                                                <option value="20GP">20' General Purpose</option>
                                                <option value="40GP">40' General Purpose</option>
                                                <option value="40HC">40" High Cube</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div className="col-lg-5">
                                        <div class="form-group">
                                            <label for="containerDescription">Container description:</label>
                                        <textarea className="form-control" type="text" value={this.state.containerDescription} onChange={(e) => this.updateContainerDescription(e)} name="containerDescription" id="containerDescription" placeholder="Enter the container description" required/>
                                        </div> 
                                    </div>
                                    <div className="col-lg-12">
                                    <button className="btn btn-primary text-center" type="submit">Add consignment</button>
                                    </div>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default OpenFcl