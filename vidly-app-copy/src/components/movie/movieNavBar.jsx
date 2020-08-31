import React, { Component } from "react";
import Input from "../common/input";

class MovieNavBar extends Component {
  state = {
    searchText: "cdcd",
  };

  handleNewMovie = () => {
    this.props.history.push("/movies/new");
  };

  render() {
    return (
      <div className="row">
        <div className="col-3 my-auto">
          <label>Showing {this.props.totalCount} movies of database</label>
        </div>
        <div className="col-7">
          <Input
            type="text"
            name="search"
            value={this.state.search}
            label=""
            placeholder="Search"
            onChange={() => {
              this.props.onSearch(this.state.searchText);
            }}
            error=""
          ></Input>
        </div>
        <div className="col">
          <button
            onClick={this.handleNewMovie}
            className="btn btn-primary btn-md"
          >
            New Movies
          </button>
        </div>
      </div>
    );
  }
}

export default MovieNavBar;
