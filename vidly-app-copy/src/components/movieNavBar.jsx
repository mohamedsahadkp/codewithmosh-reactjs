import React, { Component } from "react";

class MovieNavBar extends Component {
  handleNewMovie = () => {
    this.props.history.push("/movies/new");
  };

  render() {
    return (
      <div className="row">
        <div className="col-10">
          <p>Showing {this.props.totalCount} movies of database</p>
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
