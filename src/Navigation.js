import React from "react";
import { Link, withRouter } from "react-router-dom";


const Navigation = (props) => {

// const welcomeToggle = document.querySelector('#welcome-toggle')
// // console.log(props)

// if(props.userLoggedIn) {
//   welcomeToggle.innerHTML = 'Hi ' + props.username + '!'
// } 

  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
         
          <Link className="navbar-brand" id="welcome-toggle" to="/">
            Welcome {props.username}!
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
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