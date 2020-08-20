import React, { Component } from "react";

import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";

import {
  saveMovie,
  getMovie,
  getMovies,
  deleteMovie,
} from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../util/paginate";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    selectedGenre: 0,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handledGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre._id, currentPage: 1 });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      genres,
    } = this.state;

    if (movieCount <= 0) return <p>There is no movies in the database</p>;

    const filteredMovies = selectedGenre
      ? allMovies.filter((movie) => movie.genre._id === selectedGenre)
      : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handledGenreSelect}
          ></ListGroup>
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies of database</p>

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
              {movies.map((movie) => (
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
          <Pagination
            itemCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
      </div>
    );
  }
}

export default Movie;
