import React, { Component } from "react";

class Login extends Component {
  state = {};

  render() {
    return (
      <from>
        <div className="container col-md-4">
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control " />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </from>
    );
  }
}

export default Login;
