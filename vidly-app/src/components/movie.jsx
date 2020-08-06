import React, { Component } from "react";

import Like from "./like";
import {
  saveMovie,
  getMovie,
  getMovies,
  deleteMovie,
} from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovie = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    // const movies = [...this.state.movies];
    // const index = movies.indexOf(movie);
    // movies[index] = { ...movies[index] };
    // movies[index].like = !movies[index].like;
    // this.setState({ movies });

    movie.like = !movie.like;
    saveMovie(movie);
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
                  <Like
                    liked={movie.like}
                    onClick={() => this.handleLike(movie)}
                  ></Like>
                </td>
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
