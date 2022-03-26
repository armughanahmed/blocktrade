import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TOAddYardCard.css";

class TOAddYardCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      capacity: "",
      category: "",
      height: "",
    };
    this.sendData = this.sendData.bind(this);
  }

  updateCapacity(event) {
    this.setState({
      capacity: event.target.value,
    });
  }
  updateCategory(event) {
    this.setState({
      category: event.target.value,
    });
  }
  updateHeight(event) {
    this.setState({
      height: event.target.value,
    });
  }

  sendData(event) {
    event.preventDefault();

    const obj1 = {
      capacity: this.state.capacity,
      category: this.state.category,
      height: this.state.height,
    };

    console.log(obj1);
    this.props.formInput(obj1);
  }

  render() {
    return (
      <div id="track-card">
        <div className="card">
          <div className="card-body">
            <form action="#" onSubmit={(e) => this.sendData(e)}>
              <div className="text-center">
                <h3>Add Yard</h3>
              </div>

              <div class="form-group">
                <label for="sel1">Category:</label>
                <select
                  class="form-control"
                  value={this.state.category}
                  onChange={(e) => this.updateCategory(e)}
                  required
                >
                  <option valuesearch="">Select category</option>
                  <option valuesearch="">Electronics</option>
                  <option valuesearch="">Clothing</option>
                  <option valuesearch="">Food</option>
                  <option valuesearch="">Automobiles</option>
                  <option valuesearch="">Appliances</option>
                  <option valuesearch="">Empty</option>
                </select>
              </div>

              <div>
                <label htmlFor="">Capacity-Onground (TEUs):</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter capacity"
                  value={this.state.capacity}
                  onChange={(e) => this.updateCapacity(e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Height of stack:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter height"
                  value={this.state.height}
                  onChange={(e) => this.updateHeight(e)}
                  required
                />
              </div>

              <br />
              <div className="text-center">
                <button className="btn btn-custom">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TOAddYardCard;
