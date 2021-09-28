import React, { Component } from "react";
import Button from "../../Elements/Button/Button";
import "./SearchBar.scss";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { filmName: "", reqFilms: undefined };
  }
  async showFilms() {
    const URL = `http://localhost:4000/movies?sortOrder=desc&search=${this.state.filmName}&searchBy=title&limit=10`;
    const res = await fetch(URL);
    const data = await res.json();
    await this.setState({ reqFilms: data.data });
  }

  render() {
    return (
      <div className="search-bar">
        <h2 className="search-bar__title">find your movie</h2>
        <div className="search-bar__search-container">
          <div className="search-bar__input">
            <input
              className="input-field"
              type="text"
              placeholder="What do you want to watch?"
              onChange={(e) => {
                const value = e.target.value;
                this.setState({ filmName: value });
              }}
            />
          </div>
          <Button
            className={"search-bar"}
            type={"submit"}
            clickHandler={() => this.showFilms()}
            text={"Search"}
          />
        </div>
        {this.state.reqFilms && (
          <ul>
            {this.state.reqFilms.map((f) => (
              <li>{f.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
