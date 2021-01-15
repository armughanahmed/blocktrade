import React, { PureComponent } from 'react';
import ShippingMode from '../../components/cargoOwner/ShippingMode';
import ShippingScheduleSearch from '../../components/cargoOwner/ShippingScheduleSearch';
import SearchResultCO from '../../components/cargoOwner/SearchResultCO';
import './StartConsignment.css';
import NavbarCO from '../../components/NavbarCO';
import { Link, animateScroll as scroll } from "react-scroll";
import axios from 'axios';

class StartConsignmentCO extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        search: '',
        check1: true,
        check2: false,
        check3: false,
        searchResult:[],
          selectedSchedule: '',
          openLcls: '',
          openFcls: '',
          check4: false
        }
    }
 
    getSelectedSchedule = (schedule) =>{
       this.setState({
           selectedSchedule: schedule,
           check1: false,
           check2: false,
           check3: true
       })
       console.log(schedule);
    }

    getConsignments = (lcls,addressDetails,fcls) =>{
        this.setState({
            openFcls: fcls,
            openLcls: lcls,
            check4: true
        })
        //console.log(this.state.selectedSchedule.scheduleId)
        const obj = {
            lcl: lcls,
            fcl: fcls,
            addressDetails: addressDetails,
            scheduleId: this.state.selectedSchedule.scheduleId
        }
        this.sendQuote(obj);
        //console.log(this.state.selectedSchedule);
    }

    async sendQuote(obj1){
        console.log(obj1);
        console.log('abcdefg');
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/cargo-owner/create-quotation',obj1,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (response.data.success === 1) {
         // alert('helloo');
        this.props.history.push('/dashboard');
         }
       }
        catch(e){
         console.log(e);
        }  
       }


    check(){
        // console.log(this.state.openLcls);
        // console.log(this.state.openLcls);
        // console.log(this.state.openFcls);
        // console.log(this.state.openFcls);
    }

    searchFromChild = (obj) =>{
        this.setState({
            search: obj,
            
        });
        this.getSchedule(obj);
        scroll.scrollToBottom();
        //console.log(obj);
    }

    async getSchedule(obj){
        //console.log(obj1);
        console.log(obj);
        //console.log('abcdefg');
        const token = localStorage.getItem('token');
        try{ 
        const response = await axios.post('http://localhost:4000/cargo-owner/getSchedule',obj,{
        headers: {
            'Authorization': `Bearer ${token}`
            }
        })
        console.log(response);
        this.setState({
            searchResult: response.data.data,
            check2: true
        })
       }
        catch(e){
         console.log(e);
        }  
    }
   
    render() {
        return (
            <div>
                <NavbarCO/>
                    <div className="container-fluid" id="blue-bg">
                        
                                {
                                this.state.check1 === true &&
                                <ShippingScheduleSearch searchFromChild={this.searchFromChild}/>  
                                }
                                {
                                this.state.check2 === true &&
                                <SearchResultCO  searchResult={this.state.searchResult} getSelectedSchedule={this.getSelectedSchedule}/>  
                                }
                                {
                                    this.state.check3 === true &&
                                    <ShippingMode getConsignments={this.getConsignments}/>
                                }
                                {
                                    this.state.check4 === true &&
                                    this.check()
                                }
                        
                    </div> 
            </div>
                
        )
    }
}

export default StartConsignmentCO