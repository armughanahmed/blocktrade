import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SearchResult.css';
import axios from 'axios'

class SearchResult extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
           containers:[],
           success: false
        }
        
    }
    
    componentDidMount(){
        this.setState({
            containers: this.props.searchResult
        })
    }

     async book(event,id){
         this.setState({
             success: false
         })
         event.preventDefault();
        //  console.log('hello');
         this.setState({
             check: true
         })
         const token = localStorage.getItem('token');
         //console.log(token);
         const obj = {
             container_id: id,
             booking_till: this.props.booking
         }

         try{ 
         const response = await axios.post('http://localhost:4000/shippingCompany/requestContainer',obj,{
             headers: {
                 'Authorization': `Bearer ${token}`
             }
         })
         //console.log('far')
         console.log(response);         
         if(response.status === 202){
             this.setState({
                 success: true
             })
         }
         
        }
         catch(e){
          console.log(e.response);
         } 
     }


    show(container){
        console.log(container[0].container_id)
        return(
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="card" id="container">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    Container type: 
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    {container[0].type}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-sm-6">
                                    Available containers: 
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    {container.length}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-sm-6">
                                    Total space: 
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    {container[0].total_space}m<sup>3</sup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-sm-6">
                                    Empty weight: 
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    {container[0].empty_weight}kg
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-sm-6">
                                    Size: 
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    {container[0].size}ft
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <small>*Only one container can be booked at a time</small>
                                </div> 
                            </div>
                            <form className="form-group" onSubmit={(e) => this.book(e,container[0].container_id)}>
                                    <div className="row">
                                        <div className="col text-center">
                                            <button className="btn btn-custom1" type="submit">Book</button>
                                        </div>
                                    </div>
                            </form>       
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }




    render() {      
        return(
            <div className="container">
                {this.state.containers.map((container) =>
                    this.show(container)
                )}
                <div className="row">
                    <div className="col text-center">
                        {
                            this.state.success === true&&
                            <p className="no-container">Container booked successfully!</p>
                        }
                    </div>
                </div>    
            </div>
        )
    }
}

export default SearchResult