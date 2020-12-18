import React, { PureComponent } from 'react'
import NavbarTO from '../../components/NavbarTO';
import Footer from '../../components/Footer';
import './TOAddYard.css';
import TOAddYardCard from '../../components/TO/TOAddYardCard'

class TOAddYard extends PureComponent {
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
                        <TOAddYardCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default TOAddYard