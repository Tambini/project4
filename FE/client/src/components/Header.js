import React from 'react'
import { Route, Link, withRouter } from 'react-router-dom';


const Header = (props) => {
  return (
    <div>
      {props.currentUser ?
        <div>
          <h1>Welcome, {props.currentUser.name}</h1>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
        :
        <nav>
          <ul>
            <Link to="/register"> <li>Register</li></Link>
            <Link to="/login"> <li>Login</li></Link>
            <Link to="/recipes"><li> All Recipes</li> </Link>
            <Link to="/user/recipes"><li> My Recipes</li> </Link>
          </ul>
        </nav>
      }
    </div>
  )
}

export default Header