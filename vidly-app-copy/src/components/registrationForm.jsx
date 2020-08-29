import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";

class RegistrationForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  validationSchema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Registration Submitted");
  };

  render() {
    return (
      <div>
        <h3>Registration</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "username")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Name", "name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
