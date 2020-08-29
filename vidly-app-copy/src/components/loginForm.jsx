import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class LoginForm extends Form {
  // username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  validationSchema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  doSubmit = () => {
    console.log("Login Submited");
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
