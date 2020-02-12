import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';

import './App.css';

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



  render() {
    return (
      <div className="App" >
        <Header />
        <Register />
        <Footer />

      </div>
    );
  }
}

export default App;
