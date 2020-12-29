import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AddContainer.css'
import NavbarOC from '../../components/NavbarOC'

class AddContainer extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            containerType: '',
            containerSize: ''
        }
    }

    updateContainerType(event){
        this.setState({
            containerType: event.target.value
        })
    }

    updateContainerSize(event){
        this.setState({
            containerSize: event.target.value
        })
    }

    addContainer(event){
        event.preventDefault();
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarOC/>
            <div className="container" id="add-container">
                <form className="form-group" onSubmit={(e) => this.addContainer(e)} action="#">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <label htmlFor="type">Container type:</label>
                                    <select class="form-control" id="sel1" value={this.state.containerType} onChange={(e) => this.updateContainerType(e)} required>
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
                            <br/>
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <label htmlFor="type">Container size:</label>
                                    <select class="form-control" value={this.state.containerSize} onChange={(e) => this.updateContainerSize(e)} id="sel2" required>
                                        <option value="">Select container size</option>
                                        <option value="20FT">20 ft Fits up to 28 300 kg & 33 m³</option>
                                        <option value="40FT">40 ft Fits up to 28 800 kg & 67 m³</option>
                                        <option value="40FTHC">40 ft HC Fits up to 28 690 kg & 76 m³</option>
                                        <option value="45FTHC">45 ft HC Fits up to 27 650 kg & 85 m³ </option>
                                </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-custom" type="submit">Add container</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default AddContainer

