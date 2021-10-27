import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Welcome Gamers!
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  About
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/signup" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/login" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/logout" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/addgamer" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/addgamer">
                  Create Profile
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/Profile">
                  Profile 
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/gamers" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/gamers">
                  All Gamers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);