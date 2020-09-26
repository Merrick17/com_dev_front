import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = () => {
    let sendData = {
      name: name,
      firstName: firstName,
      email: email,
      password: password,
      phone: phone,

      role: role,
    };
    console.log("hello");
    dispatch(addANewUser(sendData));
    history.goBack();
  };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Add User</h1>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="FirstName"
              name="firstname"
              className="form-control"
              required
              value={firstName}
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
              ref={register({
                required: "Required",
                pattern: {
                  value:"/^[a-zA-Z]+ [a-zA-Z]+$/", 
                  message: "Prénom  Invalide ",
                },
              })}
            />
            {errors.firstname && <span>{errors.firstname.message}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              ref={register({
                required: "Required",
                pattern: {
                  value:"/^[a-zA-Z]+ [a-zA-Z]+$/",
                  message: "Nom  obligatoire ",
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="form-control"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Adresse email invalide",
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              ref={register({
                required: "Required",
                pattern: {
                  message: "Mot de passe obligatoire",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Phone"
              name="phone"
              required
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
                console.log(phone); 
              }}
              ref={register({
                required: "Required",
                pattern: {
                  message: "Num Tél obligatoire ",
                  value:"/^\d{8}$/"
                },
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>
          <div>
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
          <button
            className="btn btn-primary my-1"
            type="submit"
            // onClick={(event) => {
            //   event.preventDefault();
            // }}
          >
            Save
          </button>
          <button
            className="btn btn-light my-1"
            onClick={(event) => {
              event.preventDefault();
              history.goBack();
            }}
          >
            Go Back
          </button>
        </form>
      </section>
    </Fragment>
  );
}

export default Adduser;
