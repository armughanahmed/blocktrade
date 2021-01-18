import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TOAddBerthCard.css";

class TOAddBerthCard extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      craneCount: "",
      maxLength: "",
      maxWidth: "",
    };
  }

  updatecraneCount(event) {
    this.setState({
      craneCount: event.target.value,
    });
  }

  updatemaxLength(event) {
    this.setState({
      maxLength: event.target.value,
    });
  }

  updatemaxWidth(event) {
    this.setState({
      maxWidth: event.target.value,
    });
  }

  sendData(event) {
    event.preventDefault();

    const obj1 = {
      craneCount: this.state.craneCount,
      maxLength: this.state.maxLength,
      maxWidth: this.state.maxWidth,
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
                <h3>Add Berth</h3>
              </div>

              <div>
                <label htmlFor="">Max length:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter length"
                  value={this.state.maxLength}
                  onChange={(e) => this.updatemaxLength(e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Max width:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter width"
                  value={this.state.maxWidth}
                  onChange={(e) => this.updatemaxWidth(e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Crane count:</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter number of cranes"
                  value={this.state.craneCount}
                  onChange={(e) => this.updatecraneCount(e)}
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

export default TOAddBerthCard;
