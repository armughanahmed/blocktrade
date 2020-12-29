import React, { PureComponent } from 'react'
import NavbarTO from '../../components/NavbarTO';
import Footer from '../../components/Footer';
import './TOAddBerth.css';
import TOAddBerthCard from '../../components/TO/TOAddBerthCard'

class TOAddBerth extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    searchId = (id) => {
        
    }

    render() {
        return (
            <div id="wrapper">
            <NavbarTO/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <TOAddBerthCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default TOAddBerth