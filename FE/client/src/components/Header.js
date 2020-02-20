import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo2 from "../images/logo2.png";

const Header = props => {
  console.log(localStorage);
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={logo2} />
        </Link>
        <ul>
          <Link to="/recipes">
            <li> Browse</li>{" "}
          </Link>
          {/* <Link to="/categories"> <li>Categories</li></Link> */}
          <Link to="/register">
            {" "}
            <li>Register</li>
          </Link>
          <Link to="/login">
            {" "}
            <li>Login</li>
          </Link>
          {localStorage.getItem("id") && (
            <Link to="/user_recipes">
              <li> My Recipes</li>{" "}
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Header);
