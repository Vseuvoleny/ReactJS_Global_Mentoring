import React, { PureComponent } from "react";
import "./PureComponents.scss";
export default class PureComponents extends PureComponent {
  render() {
    const { counter, setCounter } = this.props;
    return (
      <div className="pure">
        <div>
          <span>Current counter: {counter}</span>
        </div>
        <div className="btn-container">
          <button
            className="button"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            Plus
          </button>
          <button
            className="button"
            onClick={() => setCounter((prev) => prev - 1)}
          >
            Minus
          </button>
        </div>
      </div>
    );
  }
}
