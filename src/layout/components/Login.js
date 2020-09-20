import React, { useState, Fragment } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../actions/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatcher = useDispatch();
  const Handlelogin = (event) => {
    event.preventDefault();
    console.log("my email", email);
    console.log("my password", password);
    dispatcher(authUser(email, password, history));
  };
  return (
    <Fragment>
      <section className="container">
        {/*<div className="alert alert-danger">Invalid credentials</div>*/}
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form className="form" onSubmit={Handlelogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={(event) => {
                //changer l'evenemt input
                setEmail(event.target.value);
                console.log("The name is ", email);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => {
                //changer l'evenemt input
                setPassword(event.target.value);
                console.log("The password is ", password);
              }}
            />
          </div>
          {/* <button
            type="button"
            className="btn btn-primary"
            value="Login"
            onClick={Handlelogin}
          /> */}
          <button type="submit" className="btn btn-primary"
          >
            {" "}
            Login
            
          </button>
        </form>
        <p className="my-1">
          {/*   Don't have an account? <Link to="Register">Sign Up</Link> */}
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
