import React, { PureComponent } from "react";
import NavbarCu from "../../components/NavbarCu";
import Footer from "../../components/Footer";
import "./CuAssignTax.css";
import CuAssignTaxCard from "../../components/customs/CuAssignTaxCard";

class CuAssignTax extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  searchId = (id) => {};

  render() {
    return (
      <div id="wrapper">
        <NavbarCu />
        <div className="container-fluid" id="track-consignment">
          <CuAssignTaxCard />
        </div>
      </div>
    );
  }
}

export default CuAssignTax;
