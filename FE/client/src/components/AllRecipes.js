import React, { Component } from "react";
import { allRecipes } from "../services/api_helper.js";
import { Route, Link, withRouter } from "react-router-dom";

class AllRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount = async () => {
    const recipes = await allRecipes();
    this.setState({
      recipes
    });
  };

  render() {
    return (
      <div>
        <div className="recipe-wrapper">
          {this.state.recipes.map(recipe => (
            <div key={recipe.id} className="recipe-items">
              {/* <div>{recipe.image}.</div>
              <h3>{recipe.dish_name}</h3> */}
              <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                {/* {" "} */}
                <img className="all-recipes-image" src={recipe.image}></img>
              </Link>
              <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>
                {recipe.dish_name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(AllRecipes);
