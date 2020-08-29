import React, { Component } from "react";
import Joi from "joi-browser";

import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const joiOption = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.data,
      this.validationSchema,
      joiOption
    );
    if (!error) return null;

    let errors = {};
    for (const item of error.details) errors[item.path] = item.message;

    return errors;
  };

  validateProperty = ({ id, value }) => {
    let reqObj = {
      [id]: value,
    };
    let schema = {
      [id]: this.validationSchema[id],
    };
    const { error } = Joi.validate(reqObj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.id] = input.value;

    let errors = {};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = document.getElementById("username").value;
    // console.log(this.username.current.value);

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(label, name, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      ></Input>
    );
  }
}

export default Form;
