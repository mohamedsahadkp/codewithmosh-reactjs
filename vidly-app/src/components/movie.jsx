import React, { Component } from "react";

import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovie = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    if (movieCount <= 0) return <p>There is no movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {movieCount} movies of database</p>

        <table className="table" style={this.style}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteMovie(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movie;
