import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { children, counter, onIncrement, onDelete } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className="badge badge-pill badge-secondary">{children}</span>
        </div>
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>
        <div>
          <button
            onClick={() => onIncrement(counter, "+")}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onIncrement(counter, "-")}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value <= 0}
          >
            -
          </button>
          <buttton
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </buttton>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
