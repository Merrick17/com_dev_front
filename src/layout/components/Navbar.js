import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearDemande } from "../actions/demande";
import { logoutUser } from "../actions/auth";
//import Login from '../layout/Login';

const UserNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
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
            <Fragment>
              <li>
                <Link to="/listDemande" title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Mon profil</span>
                </Link>
              </li>
              <li>
                <Link to="/adduser" title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Ajouter Demande</span>
                </Link>
              </li>
              <li>
                <Link
                  title="Logout"
                  onClick={() => {
                    localStorage.clear();
                    dispatch(clearDemande());
                    dispatch(logoutUser()); 
                    history.replace("/");
                  }}
                >
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Logout</span>
                </Link>
              </li>
            </Fragment>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

const AdminNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
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
            <Fragment>
              <li>
                <Link to="/listDemande" title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">List Demande</span>
                </Link>
              </li>
              <li>
                <Link to="/adduser" title="Logout">
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Ajouter utilisateur</span>
                </Link>
              </li>
              <li>
                <Link
                  title="Logout"
                  onClick={() => {
                    localStorage.clear();
                    dispatch(clearDemande());
                    history.replace("/");
                  }}
                >
                  <i className="fas fa-sign-out-alt" />
                  <span className="hide-sm">Logout</span>
                </Link>
              </li>
            </Fragment>
          </ul>
        </nav>
      </nav>
    </div>
  );
};
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setAuth(authState.auth);
  }, []);
  if (authState.roleName && authState.roleName.toLowerCase() == "admin" && authState.auth==true) {
    return <AdminNav />;
  } else if ( authState.roleName && authState.roleName.toLowerCase() == "salarier" && authState.auth==true) {
    return <UserNav />;
  } else {
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
          </ul>
        </nav>
      </nav>
    );
  }
};

export default Navbar;
