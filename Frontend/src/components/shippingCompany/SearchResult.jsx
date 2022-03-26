import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SearchResult.css';


class SearchResult extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            selectedSchedule: this.props.searchResult[0],
            stops: this.props.searchResult[0].stops
        }
        this.sendSelectedSchedule = this.sendSelectedSchedule.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            selectedSchedule: this.props.searchResult[0],
            stops: this.props.searchResult[0].stops
        })
    }

    setSelectedSchedule(index){
        this.setState({
            selectedSchedule: this.props.searchResult[index],
            stops: this.props.searchResult[index].stops
        })
        //sconsole.log(this.state.selectedSchedule);
    }

    displaySelectedSchedule(){
        //console.log(this.state.selectedSchedule);
        if (this.state.selectedSchedule !== null) {
            return(
                
                <ul>
                   <li><strong className="bold">{this.state.selectedSchedule.departurePort}</strong> 
                    <p><strong>Departure date: </strong>
                        <span> {this.state.selectedSchedule.departureDate}</span>
                    </p>
                   </li> 
                    {this.state.stops.map((stop) =>
                        <li>{stop.portName}  
                          <p><strong>Arrival date: </strong><span> {stop.arrivalDate} </span>
                          <strong>Departure date: </strong><span> {stop.departureDate}</span></p>
                        </li>
                        )}
                    <li><strong className="bold">{this.state.selectedSchedule.arrivalPort}</strong>
                    <p><strong>Arrival date: </strong>
                        <span> {this.state.selectedSchedule.arrivalDate}</span>
                    </p>
                    </li>  
                </ul>
                                                                       
             )
        }
       
    }

    sendSelectedSchedule(){
        this.props.getSelectedSchedule(this.state.selectedSchedule)
    }

    displaySchedules(result,index){
        return (
            <div className="card" onClick={() => this.setSelectedSchedule(index)}>
                <div className="card-body">
                    <div  className="search-result-card">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <h6><strong>{result.departureDate}</strong></h6>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <i className="fa fa-arrow-right fa-lg"/>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <h6><strong>{result.arrivalDate}</strong></h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <br/>
                                <p><strong>Shipping time: </strong>{result.noOfDays} Days</p>
                            </div>
                            <div className="col-lg-12 col-sm-4">
                                <p><strong>Number of stops: </strong>{result.noOfStops} Transfers</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p><strong>Ocean carrier: </strong>{result.oceanCarrier}</p>
                            </div>
                            <div className="col-lg-6">
                                <p><strong>Shipping company: </strong>{result.shippingCompany}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div id="light-bg">
<div className="row">
                <div className="col-lg-6 col-sm-12">
                <div id="search-results">
                
                    {this.props.searchResult.map((result,index) => (
                          this.displaySchedules(result,index)  
                    ))}
               
                </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="text-center" id="header">Selected schedule details</h4>
                          <div className="row">
                              <div className="col-lg-5 " id="selected-dates">
                                <strong> Departure date: </strong><p>{this.state.selectedSchedule.departureDate}</p>
                                <strong>Arrival date: </strong><p>{this.state.selectedSchedule.arrivalDate}</p>
                              </div>
                              <div className="col-lg-7">
                                <div id="search-selected">
                                    {this.displaySelectedSchedule()}                          
                                </div>
                              </div>                             
                           </div>
                           <div className="text-center">
                                <button className="btn btn-custom text-center" onClick={this.sendSelectedSchedule}>Book container</button>
                           </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default SearchResult