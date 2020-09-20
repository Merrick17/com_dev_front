import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import { addANewUser } from "../actions/users";
function Adduser() {
  const [name, setName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const state = useSelector((state) => state.rolesReducer);
  const dispatch = useDispatch();
  return (
    <Fragment>
        
    
      <section className="container">
        <h1 className="large text-primary">Add User</h1>

        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="FirstName"
              name="firstname"
              required
              value={firstName}
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
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
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone"
              name="name"
              required
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <div >
          <select
                  value={role}
                  selec
                  onChange={(event) => {
                    console.log(
                      event.target[event.target.selectedIndex].getAttribute(
                        "value"
                      )
                    );
                    setRole(
                      event.target[event.target.selectedIndex].getAttribute(
                        "value"
                      )
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
          <button  className="btn btn-primary my-1" 
          
          
          
          onClick={(event) => {
            event.preventDefault();
            let sendData = {
              name: name,
              firstName: firstName,
              email: email,
              password: password,
              phone:phone,
             
              role: role,
            };
            console.log("hello");
            dispatch(addANewUser(sendData));
          }}>
              Save
              </button>
          <a className="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </Fragment>
  );
}

export default Adduser;
