import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const state = useSelector((state) => state.rolesReducer);
  
  const registerUser = async () => {
    try {
      let response = await axios.post("http://localhost:3000/users/add", {
        name: name,
        firstName: firstName,
        email: email,
        password: password,
        phone: phone,
        role: role,
      });
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              id="name"
              value={name}
              onChange={(event) => {
                //changer l'evenemt input
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(event) => {
                //changer l'evenemt input
                setFirstName(event.target.value);
              }}
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              minLength="6"
              value={email}
              onChange={(event) => {
                //changer l'evenemt input
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <select
              value={role}
              selec
              onChange={(event) => {
                console.log(
                  event.target[event.target.selectedIndex].getAttribute("value")
                );
                setRole(
                  event.target[event.target.selectedIndex].getAttribute("value")
                );
              }}
              id="role"
              class="w-full mt-2 px-4 py-2 block rounded bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:bg-white"
            >
              {" "}
              <option selected={true} value="">
                Please choose a role{" "}
              </option>
              {state.map((elm) => (
                <option value={elm._id}>{elm.role}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder=" Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(event) => {
                //changer l'evenemt input
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phone"
              placeholder="phone "
              name="phone"
              minLength="6"
              value={phone}
              onChange={(event) => {
                //changer l'evenemt input
                setPhone(event.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={registerUser}
          >
            ADDUSER
          </button>
        </form>
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </Fragment>
  );
};

export default Register;
