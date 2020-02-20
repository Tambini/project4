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
      recipe: [],
      showButtons: false
    };
  }

  componentDidMount() {
    verifyUser();
    this.getSingleRecipe(
      this.props.match.params.category,
      this.props.match.params.id
    );
    console.log("authToken", localStorage.getItem("authToken"));
    localStorage.getItem("authToken") &&
      this.setState({
        showButtons: true
      });
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
      <div className="detail-recipe-wrapper">
        <img
          className="recipe-detail-image"
          src={this.state.recipe.image}
        ></img>
        <div className="recipe-detail-right">
          <h1 className="detail-title">{this.state.recipe.dish_name}</h1>
          <h1 className="time">time: {this.state.recipe.time} mins</h1>
          <h1 className="ingredients">
            Ingredients: {this.state.recipe.ingredients}
          </h1>
        </div>
        <h1 className="directions">
          Directions: {this.state.recipe.directions}
        </h1>

        {this.state.showButtons && (
          <>
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
          </>
        )}
      </div>
    );
  }
}

export default withRouter(RecipeDetail);
