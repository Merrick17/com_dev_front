import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import Login from '../layout/Login';
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const authState = useSelector((state) => state.authReducer);
  useEffect(() => {
    setAuth(authState.auth);
  }, []);
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> ComDev
        </Link>
      </h1>
      <link rel="stylesheet" href="css/style.css" />
      <title>Welcome To </title>
      <nav className="navbar bg-dark">
        <h1>
          <a>
            <i className="fas fa-code" /> DevConnector
          </a>
        </h1>
        <ul>
        
          {authState.auth ? (
            <Fragment>
              <li>
                |
                {/* <a href="dashboard.html" title="Dashboard">
                  <i className="fas fa-user" />
                  <span className="hide-sm">Dashboard</span>
                </a> */}
              </li>
              <li>
                <Link  title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Logout</span>
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                |
                <Link to="/register" title="Dashboard">
                  <i className="fas fa-user" />
                  <span className="hide-sm">Register</span>
                </Link>
              </li>
              <li>
                <Link to="/login" title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Login</span>
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
{
  /* <nav className="navbar bg-dark">
<h1>
  <Link to="/"><i className="fas fa-code" /> ComDev</Link>
</h1>
<link rel="stylesheet" href="css/style.css" />
    <title>Welcome To </title>
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code" /> DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <Link to="/admin">home</Link>
        </li>
        <li>
          |
          <a href="dashboard.html" title="Dashboard">
            <i className="fas fa-user" />
            <span className="hide-sm">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="login.html" title="Logout">
            <i className="fas fa-sign-out-alt" />
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
</nav> */
}
