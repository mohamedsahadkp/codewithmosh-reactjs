import React, { Component } from "react";
import SearchBox from "../common/searchBox";

class MovieNavBar extends Component {
  handleNewMovie = () => {
    this.props.history.push("/movies/new");
  };

  render() {
    return (
      <div className="row">
        <div className="col-3 my-auto">
          <label> Showing {this.props.totalCount} movies of database</label>
        </div>
        <div className="col-7 my-auto">
          <SearchBox
            value={this.props.searchQuery}
            onChange={this.props.onSearch}
          ></SearchBox>
        </div>
        <div className="col my-auto">
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
