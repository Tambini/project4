import React, { Component } from "react";

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.createRecipe(this.state);
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Image</label>
        <input
          type="image"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Time</label>
        <input
          type="integerr"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Ingredients</label>
        <input
          type="text"
          name="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default CreateRecipe;