import React, { PureComponent } from 'react'
import axios from 'axios'
import NavbarSC from '../../components/NavbarSC'
import './AssignSchedule.css'

class AssignSchedule extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            selectedContainer: '',
            containers: [],
            selectedSchedule: '',
            schedules: [],
        }
    }

    updateSelectedContainer(event){
        this.setState({
            selectedContainer: event.target.value
        })
    }

    updateSelectedSchedule(event){
        this.setState({
            selectedSchedule: event.target.value
        })
    }

    showContainers(value){
        <option value={value}>{value}</option>
    }

    showSchedules(value){
        <option value={value}>{value}</option>
    }

    async getContainers(){
        const obj = {}
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/cargo-owner/getSchedule',obj,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);
       }
        catch(e){
         console.log(e);
        }  
    }

    async getSchedules(){
        const obj = {}
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/cargo-owner/getSchedule',obj,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);
       }
        catch(e){
         console.log(e);
        }  
    }

    async AssignSchedule(){
        const obj = {}
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/cargo-owner/getSchedule',obj,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);
       }
        catch(e){
         console.log(e);
        }  
    }

    render() {
        return (
            <div>
                <NavbarSC/>
                <div className="container">
                    <div className="card" id="assign-schedule">
                        <div className="card-body">
                            <form className="form-group" onSubmit={(e) => this.AssignSchedule(e)}>
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-4">
                                        <label>Container:</label>
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.selectedContainer} onChange={(e) => this.updateSelectedContainer(e)}>
                                                <option value="">Select a container</option>
                                                {
                                                    this.state.containers.map((value) => 
                                                        this.showContainers(value)
                                                    )
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-4">
                                        <label>Schedule:</label>
                                            <div className="form-group">
                                                <select className="form-control" value={this.state.selectedSchedule} onChange={(e) => this.updateSelectedSchedule(e)}>
                                                    <option value="">Select a schedule</option>
                                                    {
                                                        this.state.schedules.map((value) => 
                                                            this.showSchedules(value)
                                                        )
                                                    }
                                                </select>
                                            </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <button className="btn btn-custom" type="submit">Assign schedules</button>
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

export default AssignSchedule