import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = (props) => {
  return (
    <div>

      <nav>
        <img src={logo} />
        <ul>
          <Link to="/recipes"><li> Browse</li> </Link>
          {/* <Link to="/categories"> <li>Categories</li></Link> */}
          <Link to="/register"> <li>Register</li></Link>
          <Link to="/login"> <li>Login</li></Link>
          <Link to="/user/recipes"><li> My Recipes</li> </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header