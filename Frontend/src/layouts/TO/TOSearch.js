import React, { PureComponent } from 'react'
import NavbarTO from '../../components/NavbarTO';
import Footer from '../../components/Footer';
import './TOSearch.css';
import TOSearchCard from '../../components/TO/TOSearchCard'

class CuSearch extends PureComponent {
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
                        <TOSearchCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default CuSearch