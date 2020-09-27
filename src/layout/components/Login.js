import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../actions/auth";
import { getAllUsers } from "../actions/users";
const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatcher = useDispatch();
  const Handlelogin = () => {
    //event.preventDefault();
    console.log("my email", email);
    console.log("my password", password);
    dispatcher(authUser(email, password, history));
    dispatcher(getAllUsers());
  };
  return (
    <Fragment>
      <section className="container">
        {/*<div className="alert alert-danger">Invalid credentials</div>*/}
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form className="form" onSubmit={handleSubmit(Handlelogin)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              className="form-control"
              onChange={(event) => {
                //changer l'evenemt input
                setEmail(event.target.value);
              }}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse Email invalide",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              className="form-control"
              onChange={(event) => {
                //changer l'evenemt input
                setPassword(event.target.value);
              }}
              ref={register({ required: true })}
            />
            {errors.password && (
              <span className="text-danger">Mot de passe obligatoire</span>
            )}
          </div>
          {/* <button
            type="button"
            className="btn btn-primary"
            value="Login"
            onClick={Handlelogin}
          /> */}
          <button type="submit" className="btn btn-primary">
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
