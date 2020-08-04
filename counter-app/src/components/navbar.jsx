import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        MyCompany
        <span className="badge bagde-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
