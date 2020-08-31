import React, { Component } from "react";
import queryString from "query-string";

import MovieFrom from "./movieForm";

import { getMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";

class MovieDetails extends MovieFrom {
  componentDidMount() {
    const { id } = this.props.match.params;
    const movie = getMovie(id);
    if (!movie) return this.props.history.push("/not-found");

    this.setState({
      data: this.modelMovie(movie),
      genres: getGenres(),
    });
  }

  modelMovie = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
      like: movie.like,
    };
  };

  // handleSave = () => {
  //   this.props.history.push("/movies");
  // };

  // render() {
  //   // Query Parameter
  //   const result = queryString.parse(this.props.location.search);
  //   console.log(result);
  //   //Route Parameter
  //   const { id } = this.props.match.params;
  //   return (
  //     <div>
  //       <h3>Movie : {id}</h3>
  //       <button className="btn btn-primary btn-sm" onClick={this.handleSave}>
  //         Save
  //       </button>
  //     </div>
  //   );
  // }
}

export default MovieDetails;
