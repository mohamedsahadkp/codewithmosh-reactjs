import React, { Component } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navbar";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 10,
      },
      {
        id: 2,
        value: 10,
      },
      {
        id: 3,
        value: 10,
      },
      {
        id: 4,
        value: 10,
      },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter.value++;
    counters[index] = { ...counter };

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        ></NavBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
