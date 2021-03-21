import React, { PureComponent } from "react";
import NavbarIT from "../../components/NavbarIT";
import Footer from "../../components/Footer";
import "./ITAddRoute.css";
import ITAddRouteCard from "../../components/inlandT/ITAddRouteCard";

class ITAddRoute extends PureComponent {
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
          <ITAddRouteCard />
        </div>
      </div>
    );
  }
}

export default ITAddRoute;
