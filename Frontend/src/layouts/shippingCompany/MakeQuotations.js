import React, { PureComponent } from 'react'
import './MakeQuotations.css'
import NavbarSC from '../../components/NavbarSC'

class MakeQuotations extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            quotations : [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ],
            selectedQuotation: '',
            fcl : [
                {
                    containerDescription: 'abd',
                    containerHeight: '45ft',
                    quantity: 50
                },
                {
                    containerDescription: 'abcd',
                    containerHeight: '25ft',
                    quantity: 50
                }
            ],
            lcl : [
                {
                    height: 150,
                    width: 100,
                    length: 200,
                    packageType: 'Boxes',
                    quantity: 50
                },
                {
                    height: 150,
                    width: 100,
                    length: 200,
                    packageType: 'Crates',
                    quantity: 50
                }
            ],
            quote: false

        }
    }

    updateSelectedQuotation(event){
        this.setState({
            selectedQuotation: event.target.value,
            quote: true
        })
    }

    showQuotations(quotation){
        return (
            <option key={quotation.id} value={quotation.id}>{quotation.id}</option>
        )
    }

    showFcl(fcl){
        if (this.state.quote === true) {
            return (
                <div className="col-lg-4" id="fcl-card">
                    <div className="card">
                        <div className="card-body">
                            <h5>Ocean FCL</h5>
                            <p>Quantity:  {fcl.quantity}</p>
                            <p>Container height:  {fcl.containerHeight}</p>
                            <p>Container description:  {fcl.containerDescription}</p>
                        </div>
                    </div>
                </div>
            ) 
        } 
    }

    showLcl(lcl){
        if (this.state.quote === true) {
        return (
            <div className="col-lg-4" id="lcl-card">
                <div className="card">
                    <div className="card-body">
                        <h5>Ocean LCL</h5>
                        <p>Quantity:  {lcl.quantity}</p>
                        <p>Length:  {lcl.length}</p>
                        <p>Width:  {lcl.width}</p>
                        <p>Height:  {lcl.height}</p>
                        <p>Package type:  {lcl.packageType}</p>
                    </div>
                </div>
            </div>
        )
        }
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarSC/>
            <div className="container" id="make-quotation">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <label htmlFor="sel1">Quotation:</label>
                                            <select className="form-control" id="sel1" value={this.state.selectedQuotation} onChange={(e) => this.updateSelectedQuotation(e)} required>
                                                <option value="">Select quotation</option>
                                                {this.state.quotations.map((quotation) => (
                                                    this.showQuotations(quotation)  
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row" id="fcl-row">
                                        {this.state.fcl.map((fcl) => (
                                            this.showFcl(fcl)  
                                        ))}
                                    </div>
                                    <div className="row" id="lcl-row">
                                        {this.state.lcl.map((lcl) => (
                                            this.showLcl(lcl)  
                                        ))}
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default MakeQuotations