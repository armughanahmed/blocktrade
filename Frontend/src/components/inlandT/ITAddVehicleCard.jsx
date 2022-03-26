import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import "./ITAddVehicleCard.css";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class ITAddVehicleCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      Vtype: "",
      Vmodel: "",
      Vyear: "",
      Vmake: "",
      Vdistancetravelled: "",
    };
    this.sendData = this.sendData.bind(this);
  }

  updateVtype(event) {
    this.setState({
      Vtype: event.target.value,
    });
  }

  updateVmodel(event) {
    this.setState({
      Vmodel: event.target.value,
    });
  }

  updateVyear(event) {
    this.setState({
      Vyear: event.target.value,
    });
  }

  updateVmake(event) {
    this.setState({
      Vmake: event.target.value,
    });
  }

  updateVdistancetravelled(event) {
    this.setState({
      Vdistancetravelled: event.target.value,
    });
  }

  sendData(event) {
    event.preventDefault();

    const obj1 = {
      Vtype: this.state.Vtype,
      Vmodel: this.state.Vmodel,
      Vmake: this.state.Vmake,
      Vyear: this.state.Vyear,
      Vdistancetravelled: this.state.Vdistancetravelled,
    };

    console.log(obj1);
    this.props.formInput(obj1);
  }

  render() {
    return (
      <div id="track-card">
        <div className="card ">
          <div className="card-body">
            <form action="#" onSubmit={(e) => this.sendData(e)}>
              <div className="text-center">
                <h2>
                  <strong>Add Vehicle</strong>
                </h2>
              </div>

              <div class="form-group">
                <label for="sel1">Vehicle Type:</label>
                <select
                  class="form-control"
                  value={this.state.Vtype}
                  onChange={(e) => this.updateVtype(e)}
                  required
                >
                  <option valuesearch="">Select category</option>
                  <option valuesearch="">Truck</option>
                  <option valuesearch="">Railway</option>
                  <option valuesearch="">Barge</option>
                  <option valuesearch="">Feeder</option>
                </select>
              </div>

              <div class="form-group">
                <label for="sel1">Model:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter Model"
                  value={this.state.Vmodel}
                  onChange={(e) => this.updateVmodel(e)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="sel1">Make:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter Make"
                  value={this.state.Vmake}
                  onChange={(e) => this.updateVmake(e)}
                  required
                />
              </div>

              <div class="form-group">
                <label for="sel1">Year:</label>
                <select
                  class="form-control"
                  value={this.state.Vyear}
                  onChange={(e) => this.updateVyear(e)}
                  required
                >
                  <option valuesearch="">Select category</option>
                  <option valuesearch="">1998</option>
                  <option valuesearch="">1999</option>
                  <option valuesearch="">2000</option>
                  <option valuesearch="">2001</option>
                  <option valuesearch="">2002</option>
                  <option valuesearch="">2003</option>
                  <option valuesearch="">2004</option>
                  <option valuesearch="">2005</option>
                  <option valuesearch="">2006</option>
                  <option valuesearch="">2007</option>
                  <option valuesearch="">2008</option>
                  <option valuesearch="">2009</option>
                  <option valuesearch="">2010</option>
                  <option valuesearch="">2011</option>
                  <option valuesearch="">2012</option>
                  <option valuesearch="">2013</option>
                  <option valuesearch="">2014</option>
                  <option valuesearch="">2015</option>
                  <option valuesearch="">2016</option>
                  <option valuesearch="">2017</option>
                  <option valuesearch="">2018</option>
                  <option valuesearch="">2019</option>
                  <option valuesearch="">2020</option>
                  <option valuesearch="">2021</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Distance Travelled (km):</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter Distance"
                  value={this.state.Vdistancetravelled}
                  onChange={(e) => this.updateVdistancetravelled(e)}
                  required
                />
              </div>

              <br />
              <button className="btn btn-custom text-right">+Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ITAddVehicleCard;
