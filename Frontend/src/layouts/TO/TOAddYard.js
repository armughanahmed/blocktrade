import React, { PureComponent } from 'react'
import NavbarTO from '../../components/NavbarTO';
import './TOAddYard.css';
import axios from 'axios';
import TOAddYardCard from '../../components/TO/TOAddYardCard'

class TOAddYard extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            yardobj: ""
        }
    }
    searchId = (id) => {

    }

    formInput = (obj1) => {
        console.log(obj1);
        this.setState({
          yardobj: obj1,
        });
        this.insertYard(obj1);
      };

      async insertYard(obj1) {
        const token = localStorage.getItem("token");
        try {
          console.log("armu" + obj1);
          const response = await axios.post("http://localhost:4000/TO/addYard",obj1,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );
          console.log("hello");
          console.log(response);
          if (response.data.success === 1) {
            alert("helloo");
            this.props.history.push("/dashboardto");
          }
        } catch (e) {
          console.log(e);
        }
      }




    render() {
        return (
            <div id="wrapper">
            <NavbarTO/> 
            <div className="container-fluid" id="track-consignment">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <TOAddYardCard formInput={this.formInput}/>
                    </div>
                </div>
            </div>
       </div>
        )
    }
}

export default TOAddYard