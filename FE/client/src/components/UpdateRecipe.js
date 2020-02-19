import React, { Component } from "react";


class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish_name: "",
      image: "",
      time: "",
      ingredients: "",
      description: ""
    };
  }

  componentDidMount = () => {
    this.setFormData();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.recipes !== this.props.recipes) {
      this.setFormData();
    }
  };

  setFormData = () => {
    if (this.props.recipes.length) {
      const { dish_name } = this.props.recipes.find(recipe => {
        return parseInt(recipe.id) === parseInt(this.props.recipeId);
      });
      this.setState({ dish_name });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={e => this.props.updatePost(e, this.props.postId, this.state)}
      >
        <label htmlFor="category"> Category</label>
        <div className="category-select" >
          <select onChange={this.handleDropdown}>
            <option> Please select one</option>
            <option name="Greek" value={1}> Greek</option>
            <option name="Italian" value={2}> Thai</option>
            <option name="Cajon and Creole" value={3}>Spanish</option>
            <option name="Mediterranean" value={4}> Mexican</option>
            <option name="English" value={5}> American</option>
          </select>
        </div>
        <label htmlFor="title">Dish Name</label>
        <input
          type="text"
          name="dish_name"
          value={this.state.dish_name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="title">Image</label>
        <input
          type="text"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Time</label>
        <input
          type="integer"
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
        <button>Update</button>
      </form>
    );
  }
}

export default UpdateRecipe;

