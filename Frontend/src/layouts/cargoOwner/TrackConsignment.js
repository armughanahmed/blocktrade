import React, { PureComponent } from 'react'
import NavbarCO from '../../components/NavbarCO';
import Footer from '../../components/Footer';
import './TrackConsignment.css';
import TrackConsignmentCard from '../../components/cargoOwner/TrackConsignmentCard'

class TrackConsignment extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="wrapper">
            <NavbarCO/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <TrackConsignmentCard/>
                    </div>
                </div>
                <Footer/> 
            </div>
          
   </div>
        )
    }
}

export default TrackConsignment