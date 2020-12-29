import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './AddShip.css'
import NavbarOC from '../../components/NavbarOC'
import axios from 'axios'

class AddShip extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            shipType: '',
            capacity: '',
            length: '',
            width: ''
        }
    }

    async addingShip(){
        //type sent to backend to receive corresponding ships of that type that belongs to ocean carrier
        const token = localStorage.getItem('token');
        //console.log(token);
        const obj = {
            type: this.state.shipType,
            total_capacity: this.state.capacity,
            length: this.state.length,
            width: this.state.width
        }
        console.log(obj);
        try{ 
        const response = await axios.post('http://localhost:4000/oceanCarrier/add',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response)
       }
        catch(e){
         console.log(e);
        }  
    }

    updateShipType(event){
        this.setState({
            shipType: event.target.value
        })
    }

    updateCapacity(event){
        this.setState({
            capacity: event.target.value
        })
    }

    updateLength(event){
        this.setState({
            length: event.target.value
        })
    }

    updateWidth(event){
        this.setState({
            width: event.target.value
        })
    }

    addShip(event){
        event.preventDefault();
        this.addingShip();
    }

    render() {
        return (
            <div className="wrapper">
                <NavbarOC/>
            <div className="container" id="add-ship">
                <div className="card">
                    <div className="card-body">
                        <form action="#" onSubmit={(e) => this.addShip(e)}>
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="type">Type:</label>
                                            <select class="form-control" id="sel1" value={this.state.shipType} onChange={(e) => this.updateShipType(e)} required>
                                                <option value="">Select ship type</option>
                                                <option value="panamax">Panamax</option>
                                                <option value="suezmax">Suezmax</option>
                                                <option value="post-panamax">Post-Panamax</option>
                                                <option value="post-suezmax">Post-Suezmax</option>
                                                <option value="post-malaccamax">Post-Malaccamax</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="capacity">Capacity:</label>
                                        <input className="form-control" value={this.state.capacity} type="number" min="1" onChange={(e) => this.updateCapacity(e)} placeholder="Enter capacity" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="length">Length:</label>
                                        <input className="form-control" value={this.state.length} type="number" min="1" onChange={(e) => this.updateLength(e)} placeholder="Enter length" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-lg-4 col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="width">Width:</label>
                                        <input className="form-control" value={this.state.width} type="number" min="1" onChange={(e) => this.updateWidth(e)} placeholder="Enter width" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <button type="submit" className="btn btn-custom">Add ship</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AddShip