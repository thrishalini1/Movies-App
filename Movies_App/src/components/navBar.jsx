import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({user}) => {
  console.log(user )
  console.log("nav")
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink class="nav-item nav-link active" to="/movies">
            Movies <span class="sr-only">(current)</span>
          </NavLink>
          <NavLink class="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink class="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>

          <NavLink class="nav-item nav-link disabled" to="#">
            Disabled
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link"
                to="/profile" >{user.name}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
