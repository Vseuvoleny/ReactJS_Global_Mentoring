import React, { Component } from "react";
import "./ComponentR.scss";
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
      <div className="class-component">
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Что хотите найти?"
            onChange={(e) => setSearchResult(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            className="button"
            type="submit"
            onClick={() => this.showResult()}
          >
            Поиск
          </button>
        </div>
        <p className="result-text">Результат поиска: {this.state.result}</p>
      </div>
    );
  }
}
