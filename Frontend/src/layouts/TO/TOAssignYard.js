import React, { PureComponent } from "react";
import NavbarTO from "../../components/NavbarTO";
import Footer from "../../components/Footer";
import "./TOAssignYard.css";
import TOAssignYardCard from "../../components/TO/TOAssignYardCard";

class TOAssignYard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  searchId = (id) => {};

  render() {
    return (
      <div id="wrapper">
        <NavbarTO />
        <div className="container-fluid" id="track-consignment">
          <TOAssignYardCard />
        </div>
      </div>
    );
  }
}

export default TOAssignYard;
