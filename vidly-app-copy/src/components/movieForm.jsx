import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

class MovieFrom extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres: [],
  };

  componentDidMount() {
    const genres = [{ name: "", _id: "" }, ...getGenres()];
    this.setState({ genres });
  }

  // TODO:
  validationSchema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().label("Stock"),
    dailyRentalRate: Joi.number().required().label("Rate"),
  };

  doSubmit = () => {
    const movie = { ...this.state.data };
    movie.genre = { _id: movie.genre };
    saveMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Title", "title")}
        {this.renderDropdown("Genre", "genre")}
        {this.renderInput("Number In Stock", "numberInStock")}
        {this.renderInput("Rate", "dailyRentalRate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default MovieFrom;
