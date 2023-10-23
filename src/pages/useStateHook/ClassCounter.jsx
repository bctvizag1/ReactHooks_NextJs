import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component </h2>
        <button onClick={this.incrementCount} className="btn btn-primary">
          Count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
