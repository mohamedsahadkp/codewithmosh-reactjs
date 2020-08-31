import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";

import { getGenres } from "../../services/fakeGenreService";
import { saveMovie } from "../../services/fakeMovieService";

class MovieFrom extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
      like: false,
    },
    errors: {},
    genres: [],
  };

  componentDidMount() {
    this.setState({ genres: getGenres() });
  }

  validationSchema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().label("Number In Stock"),
    dailyRentalRate: Joi.number().required().label("Daily Rental Rate"),
    like: Joi.boolean().label("Like"),
  };

  doSubmit = () => {
    const movie = { ...this.state.data };
    saveMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Title", "title")}
        {this.renderDropdown("Genre", "genreId")}
        {this.renderInput("Number In Stock", "numberInStock", "number")}
        {this.renderInput("Rate", "dailyRentalRate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default MovieFrom;
