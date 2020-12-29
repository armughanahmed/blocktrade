import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TOAddYardCard.css";

class TOAddYardCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="track-card">
        <div className="card">
          <div className="card-body">
            <div className="text-center">
              <h3>Add Yard</h3>
            </div>

            <div class="form-group">
              <label for="sel1">Category:</label>
              <select class="form-control">
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
              />
            </div>

            <div>
              <label htmlFor="">Height of stack:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter height"
              />
            </div>

            <br />
            <div className="text-center">
              <button className="btn btn-custom">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TOAddYardCard;
