import React, { PureComponent } from 'react'
import NavbarTO from '../../components/NavbarTO';
import './TOAddBerth.css';
import axios from 'axios';
import TOAddBerthCard from '../../components/TO/TOAddBerthCard'

class TOAddBerth extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            berthobj:''
        }
    }

    formInput = (obj1) => {
        console.log(obj1)
        this.setState({
            berthobj: obj1,
        });
        this.insertBerth(obj1);
    }

    async insertBerth(obj1) {
        const token = localStorage.getItem("token");
        try {
          console.log("armu" + obj1);
          const response = await axios.post("http://localhost:4000/TO/addBerth",obj1,{
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );
          //console.log("hello");
          console.log(response);
          if (response.data.success === 1) {
            //alert("helloo");
            this.props.history.push("/dashboardto");
          }
        } catch (e) {
          console.log(e);
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
                        <TOAddBerthCard formInput={this.formInput}/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default TOAddBerth