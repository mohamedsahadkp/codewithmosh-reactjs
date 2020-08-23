import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { companyName: "CopiMovies", totalCount: 10 };
  navBarItems = [
    { key: "home", label: "Home", route: "/home" },
    { key: "movies", label: "Movies", route: "/movies" },
    { key: "about-us", label: "About Us", route: "/about-us" },
  ];

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          {this.state.companyName}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            {this.navBarItems.map((item) => (
              <NavLink className="nav-link" key={item.key} to={item.route}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
