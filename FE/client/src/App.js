import React, { Component } from 'react';
import { registerUser, loginUser, verifyUser } from './services/api_helper';
import { Route, Link, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';


import './App.css';
import RecipeDetail from './components/RecipeDetail';
import UserRecipes from './components/UserRecipes';
import AllRecipes from './components/AllRecipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: ""
    }
  }
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });
      this.props.history.push('/recipes');
    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }


  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
    this.props.history.push("/user/recipes");
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const id = localStorage.getItem('id');
      const user = { name, email, id };
      user && this.setState({
        currentUser: user
      })
    }
  }



  render() {
    return (

      <div className="App" >
        <Header />

        <Route path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            errorText={this.state.errorText}
          />
        )} />
        <Route path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            errorMessage={this.state.errorText}
          />
        )} />
        <Route path="/recipes" render={() =>
          <AllRecipes />
        } />
        <Route path="user/:id/recipes" render={() =>
          <UserRecipes />
        } />


        <Footer />

      </div>
    );
  }
}

export default withRouter(App);
