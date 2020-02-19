import React, { Component } from "react";
import { getUserRecipes } from '../services/api_helper.js'
import { Route, Link, withRouter } from 'react-router-dom';
class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount = async () => {
    const recipes = await getUserRecipes()
    this.setState({
      recipes

    })
  }

  render() {

    return (
      <div>
        <div className="recipe-wrapper">
          {this.state.recipes.map(recipe => (
            <div key={recipe.id} className="recipe-items">
              <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}> {recipe.image}</Link>
              <Link to={`/recipes/detail/${recipe.category_id}/${recipe.id}`}>{recipe.dish_name}</Link>
            </div>
          ))}
          <Link to="/recipes/new">
            <button>Create new Recipe</button>
          </Link>
        </div>

      </div>

    )
  }
}

export default UserRecipes;