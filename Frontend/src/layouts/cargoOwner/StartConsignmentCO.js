import React, { PureComponent } from 'react';
import ShippingMode from '../../components/cargoOwner/ShippingMode';
import ShippingScheduleSearch from '../../components/cargoOwner/ShippingScheduleSearch';
import SearchResult from '../../components/cargoOwner/SearchResult';
import './StartConsignment.css';
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class StartConsignmentCO extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        search: '',
        check1: true,
        check2: false,
        check3: false,
        searchResult:[
            {
                departurePort: 'Karachi',
                arrivalPort: 'Wuhan',
                departureDate: '20-11-20',
                arrivalDate: '25-11-20',
                noOfStops: 2,
                shippingCompany: 'XYZ',
                oceanCarrier: 'Maersk',
                noOfDays: 5,
                stops: [{
                    portName: 'Port Qasim',
                    arrivalDate: '21-11-20',
                    departureDate: '21-11-20'
                },
                {
                    portName: 'Port Qasim',
                    arrivalDate: '21-11-20',
                    departureDate: '21-11-20'
                },
                {
                    portName: 'Port Qasim',
                    arrivalDate: '21-11-20',
                    departureDate: '21-11-20'
                },
                {
                    portName: 'Saudi Port',
                    arrivalDate: '22-11-20',
                    departureDate: '23-11-20'
                }]
            },
            {
                departurePort: 'Karachi1',
                arrivalPort: 'Wuhan1',
                departureDate: '21-11-20',
                arrivalDate: '25-11-20',
                noOfStops: 2,
                shippingCompany: 'XYZ',
                oceanCarrier: 'Maersk',
                noOfDays: 5,
                stops: [{
                    portName: 'Port Qasim1',
                    arrivalDate: '21-11-20',
                    departureDate: '21-11-20'
                }
                ]
            }
          ],
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

    getConsignments = (lcls,fcls) =>{
        this.setState({
            openFcls: fcls,
            openLcls: lcls,
            check4: true
        })
        const obj = {
            lcl: lcls,
            fcl: fcls
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
        this.props.history.push('/login');
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
            check2: true
        });
        scroll.scrollToBottom();
        //console.log(obj);
    }
   
    render() {
        const token = localStorage.getItem('token');
        if (token === null || token === undefined) {
            return(<Redirect to={{ pathname: '/login' }}/>)
        }
        return (
            <div>
                <NavbarCO/>
                    <div className="container-fluid" id="blue-bg">
                        <div className="container">
                                {
                                this.state.check1 === true &&
                                <ShippingScheduleSearch searchFromChild={this.searchFromChild}/>  
                                }
                                {
                                this.state.check2 === true &&
                                <SearchResult  searchResult={this.state.searchResult} getSelectedSchedule={this.getSelectedSchedule}/>  
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
                        <Footer/>
                    </div> 
            </div>
                
        )
    }
}

export default StartConsignmentCO