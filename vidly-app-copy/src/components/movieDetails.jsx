import React, { Component } from "react";
import queryString from "query-string";

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    // Query Parameter
    const result = queryString.parse(this.props.location.search);
    console.log(result);

    //Route Parameter
    const { id } = this.props.match.params;

    return (
      <div>
        <h3>Movie : {id}</h3>
        <button className="btn btn-primary btn-sm" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
