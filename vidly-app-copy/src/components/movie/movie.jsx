import React, { Component } from "react";

import MovieTable from "./movieTable";
import MovieNavBar from "./movieNavBar";

import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";

import _ from "lodash";

import {
  searchMovieByName,
  getMovies,
  deleteMovie,
} from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import { paginate } from "../../util/paginate";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    selectedGenre: null,
    sortedColum: { path: "title", order: "asc" },
    searchQuery: "",
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDeleteMovie = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLikeMovie = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });

    // movie.like = !movie.like;
    // saveMovie(movie);
    // this.setState({ movies: getMovies() });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handledGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre._id,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSortMovie = (sortedColum) => {
    this.setState({ sortedColum });
  };

  handleSearch = (query) => {
    const movies = searchMovieByName(query);
    this.setState({
      searchQuery: query,
      movies: movies ? movies : [],
      selectedGenre: null,
      currentPage: 1,
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortedColum,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filteredMovies = selectedGenre
      ? allMovies.filter((movie) => movie.genre._id === selectedGenre)
      : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortedColum.path],
      sortedColum.order
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { movies, totalCount: filteredMovies.length };
  };

  render() {
    // const { length: movieCount } = this.state.movies;
    // if (movieCount <= 0) return <p>There is no movies in the database</p>;

    const { pageSize, currentPage, sortedColum, selectedGenre } = this.state;
    const { totalCount, movies } = this.getPagedData();

    return (
      <div>
        <MovieNavBar
          totalCount={totalCount}
          searchQuery={this.searchQuery}
          onSearch={this.handleSearch}
          {...this.props}
        ></MovieNavBar>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handledGenreSelect}
            ></ListGroup>
          </div>
          <div className="col">
            <MovieTable
              movies={movies}
              sortedColum={sortedColum}
              onLike={this.handleLikeMovie}
              onDelete={this.handleDeleteMovie}
              onSort={this.handleSortMovie}
            ></MovieTable>
            <Pagination
              itemCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            ></Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
