import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom"
import {
  createRecipe, verifyUser, updateRecipe, allRecipes, getRecipe
} from "../services/api_helper"

import AllRecipes from './AllRecipes'
import CreateRecipe from './CreateRecipe'
import UpdateRecipe from './UpdateRecipe'
import UserRecipes from "./UserRecipes";

class RecipeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }

  }

  componentDidMount() {
    verifyUser();
    this.viewAllRecipes()
  }

  viewAllRecipes = async () => {
    const recipes = await allRecipes();
    this.setState({ recipes })
  }

  viewUserRecipes = async () => {
    const recipes = await getRecipe()
    this.setState({ recipes })
  }

  createRecipe = async recipeData => {
    const newRecipe = await createRecipe(recipeData)
    this.setState({
      recipes: [...this.state.recipes, newRecipe]
    })
    this.props.history.push(`/user/recipe`)
  }

  updateRecipe = async (e, recipe_id, recipeData) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <CreateRecipe />
      </div>



    )
  }
}

export default RecipeDetail;
