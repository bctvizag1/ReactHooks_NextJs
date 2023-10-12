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
      <>
        <h2>Class Component </h2>
        <button onClick={this.incrementCount}>
          Count : {this.state.count}
        </button>
      </>
    );
  }
}

export default ClassCounter;
