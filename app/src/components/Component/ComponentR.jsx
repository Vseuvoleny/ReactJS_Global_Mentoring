import React, { Component } from "react";

export default class ComponentR extends Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }
  showResult() {
    this.setState({ result: this.props.searchResult });
  }

  render() {
    const { setSearchResult } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Что хотите найти?"
            onChange={(e) => setSearchResult(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={() => this.showResult()}>
            Поиск
          </button>
        </div>
        <p>Результат поиска: {this.state.result}</p>
      </div>
    );
  }
}
