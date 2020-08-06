import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <div className="container">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            >
              # {counter.id}
            </Counter>
          ))}
        </div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
