import React, { PureComponent } from 'react'
import NavbarCu from '../../components/NavbarCu';
import Footer from '../../components/Footer';
import './CuAddTax.css';
import CuAddTaxCard from '../../components/customs/CuAddTaxCard'

class CuAddTax extends PureComponent {
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
            <NavbarCu/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <CuAddTaxCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default CuAddTax