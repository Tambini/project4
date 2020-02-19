import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import {
  getRecipe,
  verifyUser,
  deleteRecipeCall
} from "../services/api_helper";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    verifyUser();
    this.getSingleRecipe(
      this.props.match.params.category,
      this.props.match.params.id
    );
  }

  getSingleRecipe = async (categoryId, recipeId) => {
    const recipe = await getRecipe(categoryId, recipeId);
    this.setState({ recipe });
  };

  deleteRecipe = async (e, categoryId, recipeId) => {
    console.log(this.state.recipe.id);
    e.preventDefault();
    await deleteRecipeCall(categoryId, recipeId);
    this.props.history.push("/user_recipes");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.state.recipe.dish_name}</h1>
        <h1>{this.state.recipe.image}</h1>
        <h1>{this.state.recipe.time}</h1>
        <h1>{this.state.recipe.ingredients}</h1>
        <h1>{this.state.recipe.directions}</h1>
        <Link
          to={`/recipes/update/${this.state.recipe.category_id}/${this.state.recipe.id}`}
        >
          <button>Update</button>
        </Link>
        <button
          onClick={e =>
            this.deleteRecipe(
              e,
              this.state.recipe.category_id,
              this.state.recipe.id
            )
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default withRouter(RecipeDetail);
