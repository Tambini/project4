import React, { Component } from "react";
import { getUserRecipes, allRecipes } from "../services/api_helper.js";
import { Route, Link, withRouter } from "react-router-dom";

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    console.log("USERRECIPES");
    const recipes = await getUserRecipes();
    console.log(recipes);
    this.setState({
      recipes,
      apiDataLoaded: true
    });
  };

  render() {
    return (
      <div>
        <div className="my-recipes-header">
          <h1> My Recipes</h1>
          <Link to="/recipes/new">
            <button>Create New Recipe</button>
          </Link>
        </div>
        <div className="recipe-wrapper">
          {this.state.apiDataLoaded &&
            this.state.recipes.map(recipe => (
              <div key={recipe.id} className="recipe-items">
                <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                  {" "}
                  <img className="user-recipe-image" src={recipe.image}></img>
                </Link>
                <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                  <h1 className="dish-name">{recipe.dish_name}</h1>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default withRouter(UserRecipes);
