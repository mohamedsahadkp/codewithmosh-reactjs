import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/navBar";
import Home from "./components/home";
import Movie from "./components/movie";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="pageContainer">
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/movies" exact component={Movie}></Route>
          <Route path="/about-us" component={AboutUs} exact></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
