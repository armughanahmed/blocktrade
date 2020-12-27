import React, { PureComponent } from 'react'
import NavbarIT from '../../components/NavbarIT';
import Footer from '../../components/Footer';
import './ITSearch.css';
import ITSearchCard from '../../components/inlandT/ITSearchCard'

class ITSearch extends PureComponent {
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
            <NavbarIT/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <ITSearchCard/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default ITSearch