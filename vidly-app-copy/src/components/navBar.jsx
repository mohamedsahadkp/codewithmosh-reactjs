import React, { Component } from "react";

class NavBar extends Component {
  state = { companyName: "CopiMovies", totalCount: 10 };
  navBarItems = [
    { key: "home", label: "Home", route: "/home" },
    { key: "movies", label: "Movies", route: "/movies" },
    { key: "about-us", label: "About Us", route: "/about-us" },
  ];

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">
          {this.state.companyName}
          <span className="badge bagde-pill badge-secondary m-2">
            {this.state.totalCount}
          </span>
        </span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.navBarItems.map((item) => (
              <li key={item.key} className="nav-item active">
                <a className="nav-link" href={item.route}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
