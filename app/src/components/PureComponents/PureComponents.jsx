import React, { PureComponent } from "react";

export default class PureComponents extends PureComponent {
  render() {
    const { counter, setCounter } = this.props;
    return (
      <>
        <div>
          <span>Current counter: {counter}</span>
        </div>
        <div>
          <button onClick={() => setCounter((prev) => prev + 1)}>Plus</button>
          <button onClick={() => setCounter((prev) => prev - 1)}>Minus</button>
        </div>
      </>
    );
  }
}
