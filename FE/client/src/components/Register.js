import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="register-wrapper">
        {this.props.errorText && <p>{this.props.errorText} </p>}
        <form
          className="register-form"
          onSubmit={e => this.props.handleRegister(e, this.state)}
        >
          <h2 className="register-title">Register</h2>
          <label htmlFor="name"> name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email"> email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password"> password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button> Submit</button>
          <Link to="/login" className="switch-sign-in">
            Login
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
