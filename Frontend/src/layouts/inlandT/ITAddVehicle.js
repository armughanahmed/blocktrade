import React, { PureComponent } from "react";
import NavbarIT from "../../components/NavbarIT";
import "./ITAddRoute.css";
import axios from "axios";
import ITAddVehicleCard from "../../components/inlandT/ITAddVehicleCard";

class ITAddVehicle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      vehicleobj: "",
    };
  }

  formInput = (obj1) => {
    console.log(obj1);
    this.setState({
      vehicleobj: obj1,
    });
    this.insertVehicle(obj1);
  };

  async insertVehicle(obj1) {
    const token = localStorage.getItem("token");
    try {
      //console.log("armu" + obj1);
      const response = await axios.post("http://localhost:4000/inlandT/addVehicle",obj1,{
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      //console.log("hello");
      console.log(response);
      if (response.data.success === 1) {
        //alert("helloo");
        this.props.history.push("/dashboardIT");
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div id="wrapper">
        <NavbarIT />
        <div className="container-fluid" id="track-consignment">
          <ITAddVehicleCard formInput={this.formInput} />
        </div>
      </div>
    );
  }
}

export default ITAddVehicle;