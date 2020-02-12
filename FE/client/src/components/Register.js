import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleCHange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleRegister(e, this.state)}>
          <h2>Register</h2>
          <label htmlFor="name"> name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleCHange}
          />
          <label htmlFor="name"> email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleCHange}
          />
          <label htmlFor="name"> password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleCHange}
          />
          <button> Submit!</button>
        </form>
      </div>
    )
  }
}