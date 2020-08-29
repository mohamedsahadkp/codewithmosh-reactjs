import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import NavBar from "./components/navBar";
import Home from "./components/home";
import Movie from "./components/movie";
import MovieDetails from "./components/movieDetails";

import AboutUs from "./components/aboutUs";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <Switch>
          <Route
            path="/registration"
            component={RegistrationForm}
            exact
          ></Route>
          <Route path="/login" exact component={LoginForm} exact></Route>
          <Route path="/home" exact component={Home}></Route>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/movies" exact component={Movie}></Route>
          /* Optional params append? ex: /products/:id? */
          <Route path="/movies/:id" exact component={MovieDetails}></Route>
          /* Passig custom props to component*/
          <Route
            path="/about-us"
            component={(props) => (
              <AboutUs sortBy="test-message" {...props}></AboutUs>
            )}
            exact
          ></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
