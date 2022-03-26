import React, { PureComponent } from 'react'
import NavbarFI from '../../components/NavbarFI';
import Footer from '../../components/Footer';
import './LCSearch.css';
import LCSearchCard from '../../components/FI/LCSearchCard'

class LCSearch extends PureComponent {
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
            <NavbarFI/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <LCSearchCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default LCSearch