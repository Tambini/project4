import React, { Component } from "react";
import { registerUser, loginUser, verifyUser } from "./services/api_helper";
import { Route, Link, withRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

import "./App.css";
import RecipeDetail from "./components/RecipeDetail";
import UserRecipes from "./components/UserRecipes";
import AllRecipes from "./components/AllRecipes";
import CreateRecipe from "./components/CreateRecipe";
import UpdateRecipe from "./components/UpdateRecipe";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import Test from "./components/Test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    };
  }
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push("/recipes");
    } else {
      this.setState({ errorText: currentUser.errorMessage });
    }
  };

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push("/user_recipes");
  };

  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
  };

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const id = localStorage.getItem("id");
      const user = { name, email, id };

      user &&
        this.setState({
          currentUser: user
        });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.currentUser ? (
          <div className="welcome-message">
            <h1>Welcome, {localStorage.getItem("name")}</h1>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>please login to see your recipes</h1>
          </div>
        )}
        <Header />

        <Route
          path="/register"
          render={() => (
            <Register
              handleRegister={this.handleRegister}
              errorText={this.state.errorText}
            />
          )}
        />
        <Route
          path="/login"
          render={() => (
            <Login
              handleLogin={this.handleLogin}
              errorMessage={this.state.errorText}
            />
          )}
        />
        <Route exact path="/recipes" render={() => <AllRecipes />} />
        <Route path="/user_recipes" component={UserRecipes} />
        <Route path="/recipes/new" component={CreateRecipe} />
        <Route path="/recipes/detail/:category/:id" component={RecipeDetail} />
        <Route path="/recipes/update/:category/:id" component={UpdateRecipe} />
        <Route
          exact
          path="/"
          render={
            () => <Homepage />
            // <Homepage2 />
          }
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
