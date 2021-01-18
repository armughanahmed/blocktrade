import React from "react";
import PropTypes from "prop-types";

class OpenLcl extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      selectedValue1: "",
      quantity: "",
      length: "",
      width: "",
      height: "",
      selectedValue2: "",
      weight: "",
      selectedValue3: "",
    };
    this.addConsignment = this.addConsignment.bind(this);
  }

  updateType(event) {
    this.setState({ selectedValue1: event.target.value });
  }
  updateUnit(event) {
    this.setState({ selectedValue2: event.target.value });
  }

  updateWunit(event) {
    this.setState({ selectedValue3: event.target.value });
  }

  updateQuantity(event) {
    this.setState({ quantity: event.target.value });
  }

  updateLength(event) {
    this.setState({ length: event.target.value });
  }

  updateWidth(event) {
    this.setState({ width: event.target.value });
  }

  updateHeight(event) {
    this.setState({ height: event.target.value });
  }

  updateWeight(event) {
    this.setState({ weight: event.target.value });
  }

  addConsignment(event) {
    var select = (document.getElementById("movement-select").disabled = true);

    event.preventDefault();
    //console.log(this.state.selectedValue);

    const obj = {
      mode: this.props.mode,
      movementType: this.props.movementType,
      type: this.state.selectedValue1,
      quantity: this.state.quantity,
      length: this.state.length,
      width: this.state.width,
      height: this.state.height,
      unit: this.state.selectedValue2,
      weight: this.state.weight,
      wunit: this.state.selectedValue3,
    };
    this.props.consignments.push(obj);
    console.log(this.props.consignments);
    this.setState({
      selectedValue1: "",
      quantity: "",
      length: "",
      width: "",
      height: "",
      selectedValue2: "",
      weight: "",
      selectedValue3: "",
    });
    this.props.childCallback();
  }

  render() {
    return (
      <div id="shipping-mode">
        <form className="form-group" action="#" onSubmit={this.addConsignment}>
          <div className="row ">
            <div className="col-lg-6">
              <div className="form-group">
                <label for="sel1">Package type:</label>
                <select
                  className="form-control"
                  id="sel1"
                  value={this.state.selectedValue1}
                  onChange={(e) => this.updateType(e)}
                  required
                >
                  <option value="">Type</option>
                  <option value="skids">Skids</option>
                  <option value="crates">Crates</option>
                  <option value="boxes">Boxes</option>
                  <option value="cartons">Cartons</option>
                  <option value="cases">Cases</option>
                  <option value="packages">Packages</option>
                  <option value="drums">Drums</option>
                  <option value="barrels">Barrels</option>
                  <option value="balesnoncompressed">
                    Bales non-compressed
                  </option>
                  <option value="bags">Bags</option>
                  <option value="roles">Roles</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label for="quantity">Quantity:</label>
                <input
                  className="form-control"
                  value={this.state.quantity}
                  onChange={(e) => this.updateQuantity(e)}
                  type="number"
                  min="1"
                  name="quantity"
                  id="quantity"
                  placeholder="Quantity"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label for="length">Length:</label>
                <input
                  className="form-control"
                  type="number"
                  value={this.state.length}
                  onChange={(e) => this.updateLength(e)}
                  min="1"
                  name="length"
                  id="length"
                  placeholder="Length"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label class for="width">
                  Width:
                </label>
                <input
                  className="form-control"
                  type="number"
                  value={this.state.width}
                  onChange={(e) => this.updateWidth(e)}
                  min="1"
                  name="width"
                  id="width"
                  placeholder="Width"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div class="form-group">
                <label for="height">Height:</label>
                <input
                  className="form-control"
                  type="number"
                  value={this.state.height}
                  onChange={(e) => this.updateHeight(e)}
                  name="height"
                  min="1"
                  id="height"
                  placeholder="Height"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label for="sel2">Unit:</label>
                <select
                  className="form-control"
                  id="sel2"
                  value={this.state.selectedValue2}
                  onChange={(e) => this.updateUnit(e)}
                  required
                >
                  <option value="">Unit</option>
                  <option value="CM">CM</option>
                  <option value="IN">IN</option>
                  <option value="M">M</option>
                  <option value="MM">MM</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="form-group">
                <label for="weight">Weight:</label>
                <input
                  className="form-control"
                  type="number"
                  value={this.state.weight}
                  onChange={(e) => this.updateWeight(e)}
                  min="1"
                  name="weight"
                  id="weight"
                  placeholder="Weight"
                  required
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label for="sel3">Unit:</label>
                <select
                  className="form-control"
                  id="sel3"
                  value={this.state.selectedValue3}
                  onChange={(e) => this.updateWunit(e)}
                  required
                >
                  <option value="">Unit</option>
                  <option value="KG">KG</option>
                  <option value="LB">LB</option>
                  <option value="TON">TON</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-12 mt-2">
              <button className="btn btn-primary text-center" type="submit">
                Add consignment
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OpenLcl;
