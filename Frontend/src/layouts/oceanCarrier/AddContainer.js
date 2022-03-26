import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AddContainer.css'
import NavbarOC from '../../components/NavbarOC'
import axios from 'axios'

class AddContainer extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            containerType: '',
            containerSize: '',
            success: false
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

     async addContainer(event){
        event.preventDefault();
        const token = localStorage.getItem('token');
        const obj = {
            containerSize: this.state.containerSize,
            type: this.state.containerType,
        }
        console.log(obj);
        try{
            const response = await axios.post('http://localhost:4000/oceanCarrier/createContainer',obj,{
             headers: {
                 'Authorization': `Bearer ${token}`
             }
         })
         console.log(response.status);
         if (response.status === 202) {
            this.setState({
                success: true
            })
            console.log(this.state.success);
            setTimeout(function(){
               window.location.reload();
           }, 3000);
        }
        }
        catch(e){
            console.log(e.response);
        }
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
                                        <option value="20-ft 28300-kg 33-m³">20 ft Fits up to 28 300 kg & 33 m³</option>
                                        <option value="40-ft 28800-kg 67-m³">40 ft Fits up to 28 800 kg & 67 m³</option>
                                        <option value="40-ft-HC 28690-kg 76-m³">40 ft HC Fits up to 28 690 kg & 76 m³</option>
                                        <option value="45-ft-HC 27650-kg 85-m³">45 ft HC Fits up to 27 650 kg & 85 m³ </option>
                                </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row text-center">
                                <div className="col">
                                    {
                                        this.state.success === true&&
                                        <p id="success-add-container">Successfully added container!</p>
                                    }
                                </div>
                            </div>
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

