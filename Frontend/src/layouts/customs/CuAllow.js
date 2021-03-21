import React, { PureComponent } from 'react'
import NavbarCu from '../../components/NavbarCu';
import Footer from '../../components/Footer';
import './CuAllow.css';
import CuAllowCard from '../../components/customs/CuAllowCard'

class CuAllow extends PureComponent {
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
                        <CuAllowCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default CuAllow