import React, { Component } from "react";
import { allRecipes } from '../services/api_helper.js'

class AllRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount = async () => {
    const recipes = await allRecipes()
    this.setState({
      recipes

    })
  }

  render() {
    return (
      <div>
        <div className="recipe-wrapper">
          {this.state.recipes.map(recipe => (
            <div key={recipe.id} className="doodle-info">
              <div>{recipe.image}.</div>
              <h3>d{recipe.dish_name}</h3>
            </div>
          ))}
        </div>
      </div>

    )
  }
}

export default AllRecipes;