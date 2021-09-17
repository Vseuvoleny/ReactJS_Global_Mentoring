import React, { Component } from "react";

export default class ElementCr extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello world!"
    );
  }
}
