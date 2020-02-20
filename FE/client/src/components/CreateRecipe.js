import React, { Component } from "react";
import { createRecipeCall } from "../services/api_helper";
import { withRouter } from "react-router-dom";

class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish_name: "",
      image: "",
      time: "",
      ingredients: "",
      directions: ""
      // recipes: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  createRecipe = async (category, recipeData) => {
    console.log(category);
    console.log(recipeData);
    const newRecipe = await createRecipeCall(category, recipeData);
    console.log(newRecipe);
    this.props.history.push(`/user_recipes`);
  };

  handleDropdown = e => {
    this.setState({
      category: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <form
        className="create-form-wrapper"
        onSubmit={e => {
          e.preventDefault();
          this.createRecipe(
            this.state.category,

            {
              dish_name: this.state.dish_name,
              image: this.state.image,
              time: this.state.time,
              directions: this.state.directions,
              ingredients: this.state.ingredients
            }
          );
        }}
      >
        <h1 className="create-title">Create a Recipe</h1>
        <label htmlFor="category"> Category</label>
        <div className="category-select">
          <select onChange={this.handleDropdown}>
            <option> Please select one</option>
            <option name="Greek" value={1}>
              {" "}
              Greek
            </option>
            <option name="Italian" value={2}>
              {" "}
              Thai
            </option>
            <option name="Cajon and Creole" value={3}>
              Spanish
            </option>
            <option name="Mediterranean" value={4}>
              {" "}
              Mexican
            </option>
            <option name="English" value={5}>
              {" "}
              American
            </option>
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
        <textarea
          className="ingredients-input"
          type="text"
          name="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Directions</label>
        <textarea
          className="directions-input"
          type="text"
          name="directions"
          value={this.state.directions}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(CreateRecipe);
