import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <form onSubmit={e => this.props.handleLogin(e, this.state)}>
          <h2>Please login to view your recipes</h2>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          <Link to="/register">Register</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
