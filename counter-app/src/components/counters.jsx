import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 10,
      },
      {
        id: 2,
        value: 100,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 1000,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
