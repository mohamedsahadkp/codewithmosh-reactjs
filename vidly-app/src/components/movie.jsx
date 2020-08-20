import React, { Component } from "react";

import MovieTable from "./movieTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";

import {
  saveMovie,
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

  handleLikeMovie = (movie) => {
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
          <MovieTable
            movies={movies}
            onLike={this.handleLikeMovie}
            onDelete={this.handleDeleteMovie}
          ></MovieTable>
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
