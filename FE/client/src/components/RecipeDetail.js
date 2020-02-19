import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom"
import {
  getRecipe, verifyUser
} from "../services/api_helper"



class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }

  }

  componentDidMount() {
    console.log(this.props)
    verifyUser();
    this.getSingleRecipe(this.props.match.params.category, this.props.match.params.id);
  }




  getSingleRecipe = async (categoryId, recipeId) => {
    const recipes = await getRecipe(categoryId, recipeId)
    this.setState({ recipes })
  }

  render() {
    return (
      <div>
        <h1>{this.state.recipes.dish_name}</h1>
        <h1>{this.state.recipes.image}</h1>
        <h1>{this.state.recipes.time}</h1>
        <h1>{this.state.recipes.ingredients}</h1>
        <h1>{this.state.recipes.directions}</h1>
        <Link to="/recipes/update">
          <button>Update </button>
          <button>Delete</button>
        </Link>
      </div>



    )
  }
}

export default RecipeDetail;
