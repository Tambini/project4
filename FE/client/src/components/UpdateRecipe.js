import React, { Component } from "react";
import { updateRecipe } from "../services/api_helper";
import { getRecipe } from "../services/api_helper";
import { withRouter } from "react-router-dom";

class UpdateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish_name: "",
      image: "",
      time: "",
      ingredients: "",
      directions: "",
      recipe: []
    };
  }

  componentDidMount = () => {
    // this.setCurrentForm();
    this.getSingleRecipe(
      this.props.match.params.category,
      this.props.match.params.id
    );
  };

  getSingleRecipe = async (categoryId, recipeId) => {
    const recipe = await getRecipe(categoryId, recipeId);
    this.setState({ recipe });
    this.setState({
      dish_name: this.state.recipe.dish_name,
      image: this.state.recipe.image,
      time: this.state.recipe.time,
      ingredients: this.state.recipe.ingredients,
      directions: this.state.recipe.directions
    });
  };

  handleDropdown = e => {
    this.setState({
      category: e.target.value
    });
  };

  updateRecipe = async (e, category_id, id, postData) => {
    e.preventDefault();
    const res = await updateRecipe(category_id, id, postData);
    this.props.history.push(`/user_recipes`);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={e =>
          this.updateRecipe(
            e,
            this.props.match.params.category,
            this.props.match.params.id,
            this.state
          )
        }
      >
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
        <input
          type="text"
          name="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />
        <label htmlFor="title">Directions</label>
        <input
          type="text"
          name="directions"
          value={this.state.directions}
          onChange={this.handleChange}
        />
        <button>Update</button>
      </form>
    );
  }
}

export default withRouter(UpdateRecipe);
