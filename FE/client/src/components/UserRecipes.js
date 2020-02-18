import React, { Component } from "react";
import { Link } from "react-router-dom";

function UserRecipes() {
  return (
    <div className="recipe-wrapper">
      <Link to="create/new"><button>✎ Add Recipe </button></Link>
      <Link to="user/:id/recipes"><button>🔍 My Recipes </button></Link>
    </div>
  )
}



export default UserRecipes;