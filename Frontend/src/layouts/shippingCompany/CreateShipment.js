import React, { PureComponent } from 'react'
import './CreateShipment.css'
class CreateShipment extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            cargoOwners: [
                {
                    id: 1,
                    name: 'Farhan'
                },
                {
                    id: 2,
                    name: 'Armughan'
                }
            ],
            selectedCargoOwner: '',
            nonAssignedConsignments: [
                {
                    id: 1,
                    name: "electronics",
                    type: "p2p"
                },
                {
                    id: 2,
                    name: "clothing",
                    type: "p2d"
                },
                {
                    id: 3,
                    name: "clothing",
                    type: "d2p"
                },
                {
                    id: 4,
                    name: "clothing",
                    type: "d2d"
                }
            ], //Armughan will send data
            selectedConsignment: '',
            containerType: '',
            unfilledContainers: [
                {
                    id: 1,
                    spaceAvailable: '45%'
                }
            ], //Armughan will send data
            selectedContainer: '',
            category: '',
            pickupCountry: '',
            pickupCity: '',
            pickupInland: [
                {
                    id: 1,
                    name: "Ghafoor bhai"
                },
                {
                    id: 2,
                    name: "Shakoor bhai"
                }
            ],  //After selecting country and city a axios request will be made to get the inland transporters available in that city/country
            selectedPickupInland: '',
            pickupAddress: '',
            destinationCountry: '',
            destinationCity: '',
            destinationInland: [
                {
                    id: 1,
                    name: "Ghafoor bhai"
                },
                {
                    id: 2,
                    name: "Shakoor bhai"
                }
            ],
            selectedDestinationInland: '',
            destinationAddress: '',
            type: null
        }
    }

    updateSelectedConsignment(event){
        this.setState({
            selectedConsignment: event.target.value
        })
        this.state.nonAssignedConsignments.map((consignment) => {
            if (consignment.id === parseInt(event.target.value)) {
                console.log(consignment.type)
                this.setState({
                    type: consignment.type
                })
                return true;
            }
            return false
           
        })
    }

    updateSelectedCargoOwner(event){
        this.setState({
            selectedCargoOwner: event.target.value
        })
    }

    updateSelectedContainer(event){
        this.setState({
            selectedContainer: event.target.value
        })
    }

    updateSelectedPickupInland(event){
        this.setState({
            selectedPickupInland: event.target.value
        })
    }

    updateSelectedDestinationInland(event){
        this.setState({
            selectedDestinationInland: event.target.value
        })
    }

    updateContainerType(event){
        this.setState({
            containerType: event.target.value
        })
        //request jaegi to get containers of that type
    }

    showNonAssignedConsignments(consignment){
        //console.log("hello");
        return (
            <option value={consignment.id}>{consignment.name}</option>
        )
    }

    showCargoOwners(cargoOwner){
        //console.log("hello");
        return (
            <option value={cargoOwner.id}>{cargoOwner.name}</option>
        )
    }

    showUnfilledContainers(container){
        return (
            <option value={container.id}>{container.spaceAvailable}</option>
        )
    }

    showPickupInland(inland){
        return (
            <option value={inland.id}>{inland.name}</option>
        )
    }

    showDestinationInland(inland){
        return (
            <option value={inland.id}>{inland.name}</option>
        )
    }
    
    confirmBooking(event){
        alert('Done!');
    }

    showPickupInlandDetails(){
        return(
            <div id="pickup">
                <div className="row">
                    <div className="col-lg-3 offset-lg-2">
                         <label>Pickup:</label>
                    </div>
                    <div className="col-lg-5">
                        <input className="form-control" value={this.state.pickupCountry} placeholder="Country"/>
                     </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 offset-lg-2"></div>
                        <div className="col-lg-5">
                            <input className="form-control" value={this.state.pickupCity} placeholder="City"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 offset-lg-2">
                            <label>Inland transporter:</label>
                        </div>
                        <div className="col-lg-5">
                            <div className="form-group">
                                <select className="form-control" value={this.state.selectedPickupInland} onChange={(e) => this.updateSelectedPickupInland(e)} id="sel6" required>
                                    <option value="">Select pickup inland</option>
                                        {this.state.pickupInland.map((inland) => (
                                            this.showPickupInland(inland)  
                                        ))}
                                </select>
                            </div>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-lg-3 offset-lg-2"></div>
                            <div className="col-lg-5">
                                <textarea cols="79" className="form-control" placeholder="Enter pickup address" required></textarea>
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
                                        <input className="form-control" value={this.state.destinationCountry} placeholder="Country"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                    
                                    </div>
                                    <div className="col-lg-5">
                                        <input className="form-control" value={this.state.destinationCity} placeholder="City"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Inland transporter:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.selectedDestinationInland} onChange={(e) => this.updateSelectedDestinationInland(e)} id="sel6" required>
                                                <option value="">Select destination inland</option>
                                                {this.state.destinationInland.map((inland) => (
                                                    this.showDestinationInland(inland)  
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                    
                                    </div>
                                    <div className="col-lg-5">
                                    <textarea cols="79" className="form-control" placeholder="Enter delivery address" required></textarea>
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

    render() {
            return (
                <div id="create-shipment-view">
                    <div className="container">
                            <div className="details">
                              <form action="#" onSubmit={(e) => this.confirmBooking(e)}>
                              <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Cargo owner:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.selectedCargoOwner} onChange={(e) => this.updateSelectedCargoOwner(e)} id="sel5" required>
                                                <option value="">Select cargo owner</option>
                                                {this.state.cargoOwners.map((cargoOwner,index) => (
                                                    this.showCargoOwners(cargoOwner,index)  
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Non assigned consignments:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.selectedConsignment} onChange={(e) => this.updateSelectedConsignment(e)} id="sel5" required>
                                                <option value="">Select consignment</option>
                                                {this.state.nonAssignedConsignments.map((consignment,index) => (
                                                    this.showNonAssignedConsignments(consignment,index)  
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Container type:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.containerType} onChange={(e) => this.updateContainerType(e)} id="sel3" required>
                                                <option value="">Select container type</option>
                                                <option value="dry-storage">Dry storage</option>
                                                <option value="flat-rack">Flat rack</option>
                                                <option value="open-top">Open top</option>
                                                <option value="tunnel">Tunnel</option>
                                                <option value="open-side-storage">Open side storage</option>
                                                <option value="double-door">Double door</option>
                                                <option value="refrigrated-iso">Refrigrated ISO</option>
                                            </select>
                                        </div> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Booked containers unfilled:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.selectedContainer} onChange={(e) => this.updateSelectedContainer(e)} id="sel1" required>
                                                <option value="">Select conatiner</option>
                                                {this.state.unfilledContainers.map((container) => (
                                                    this.showUnfilledContainers(container)  
                                                ))}
                                            </select>
                                        </div>  
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-2">
                                        <label>Category:</label>
                                    </div>
                                    <div className="col-lg-5">
                                        <input className="form-control" placeholder="Enter category" required/>
                                    </div>
                                </div>
                                {
                                    this.state.type === "p2d" &&
                                    this.showDestinationInlandDetails() 
                                }
                                 {
                                    this.state.type === "d2p" &&
                                    this.showPickupInlandDetails() 
                                }

                                 {
                                    this.state.type === "d2d"
                                       ? [this.showDestinationInlandDetails(), this.showPickupInlandDetails()] 
                                       : null
                                }
                                {
                                    this.state.type === null &&
                                    this.show()
                                }
                                {
                                    this.state.type === "p2p" &&
                                    this.show()
                                }



                               
                                
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
                                            <button className="btn btn-custom" type="submit">Confirm shipment</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            ) 
    }
}

export default CreateShipment
