import React, { Component } from "react";

class Helper extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  image = {
    name: "Photos",
    url: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fondWidth: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Clicked", this);
  // }

  handleIncrement = (data) => {
    console.log("Clicked", this, data);
    this.setState({ count: this.state.count + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <div>
        {this.props.children}
        <img src={this.image.url} alt=""></img>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 3 })}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length <= 0 && "Please create tags"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length <= 0) return <p> There no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    const zeroHTML = <h6>Zero</h6>;
    return count === 0 ? "Zero" : count;
  }
}

export default Helper;
