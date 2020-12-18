import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TOAddBerthCard.css";

class TOAddBerthCard extends PureComponent {
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
              <h3>Add Berth</h3>
            </div>

            <div>
              <label htmlFor="">Max length:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter length"
              />
            </div>

            <div>
              <label htmlFor="">Max width:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter width"
              />
            </div>

            <div>
              <label htmlFor="">Crane count:</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter number of cranes"
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

export default TOAddBerthCard;
