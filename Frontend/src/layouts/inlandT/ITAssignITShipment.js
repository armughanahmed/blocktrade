import React, { PureComponent } from "react";
import NavbarIT from "../../components/NavbarIT";
import Footer from "../../components/Footer";
import "./ITAssignITShipment.css";
import ITAssignITShipmentCard from "../../components/inlandT/ITAssignITShipmentCard";

class ITAssignITShipment extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  searchId = (id) => {};

  render() {
    return (
      <div id="wrapper">
        <NavbarIT />
        <div className="container-fluid" id="track-consignment">
          <ITAssignITShipmentCard />
        </div>
      </div>
    );
  }
}

export default ITAssignITShipment;
