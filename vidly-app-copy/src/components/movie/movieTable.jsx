import React, { Component } from "react";

import Like from "../common/like";
import Table from "../common/table";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  moviesHeader = [
    {
      label: "Title",
      path: "title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    {
      label: "Genre",
      path: "genre.name",
    },
    {
      label: "Stock",
      path: "numberInStock",
    },
    {
      label: "Rate",
      path: "dailyRentalRate",
    },
    {
      label: "",
      path: "like",
      content: (movie) => (
        <Like
          liked={movie.like}
          onClick={() => this.props.onLike(movie)}
        ></Like>
      ),
    },
    {
      label: "",
      path: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortedColum } = this.props;
    return (
      <Table
        columns={this.moviesHeader}
        data={movies}
        onSort={onSort}
        sortedColum={sortedColum}
      ></Table>
    );
  }
}

export default MovieTable;
