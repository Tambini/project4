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
    const recipes = await allRecipes();
    console.log(recipes);
    this.setState({
      recipes,
      apiDataLoaded: true
    });
  };

  render() {
    return (
      <div>
        <div className="recipe-wrapper">
          {this.state.apiDataLoaded &&
            this.state.recipes.map(recipe => (
              <div key={recipe.id} className="recipe-items">
                <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                  {" "}
                  {recipe.image}
                </Link>
                <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                  {recipe.dish_name}
                </Link>
              </div>
            ))}
          <Link to="/recipes/new">
            <button>Create new Recipe</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(UserRecipes);
