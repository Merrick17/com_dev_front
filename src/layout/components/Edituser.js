import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../actions/users";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
function Edituser(props) {
  const [name, setName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [file, setFile] = useState(undefined);
  const state = useSelector((state) => state.rolesReducer); //pour selectionner tous les roles
  let userList = useSelector((state) => state.userReducer); //pour selectioner un utilisateur unique
  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  useEffect(() => {
    console.log("User List", userList);
    let id = props.match.params.id;
    let selectedUser = userList.find((elm) => elm._id == id);
    setName(selectedUser.name);
    setfirstName(selectedUser.firstName);
    setEmail(selectedUser.email);
    setPhone(selectedUser.phone);
    setPassword(selectedUser.password);
    console.log("userID ", id);
    setUserId(id);
  }, []);
  const onSubmit = () => {
    console.log(errors.lastname);
    let formData = new FormData();

    formData.append("imageUrl", file);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("firstName", firstName);
    dispatch(UpdateUser(formData, userId));
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Update User</h1>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="FirstName"
              name="firstname"
              value={firstName}
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
              ref={register({
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Prénom  Invalide ",
                },
              })}
            />
            {errors.firstname && (
              <span className="text-danger">{errors.firstname.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="lastname"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              ref={register({
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Nom Invalide ",
                },
              })}
            />
            {errors.lastname && (
              <span className="text-danger">{errors.lastname.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              ref={register({
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
              //type="hidden"
              type="text"
              placeholder="Password"
              name="password"
              disabled
            />
          </div>

          <div className="form-group">
            <input
              //type="hidden"
              type="text"
              placeholder="Phone"
              name="name"
              required
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              ref={register({
                minLength: 8,
                maxLength: 8,

                pattern: {
                  value: /^\d{8}$/,
                },
              })}
            />
            {errors.phone && <span className="text-danger">Num Tél Max 8</span>}
          </div>
          <div className="form-group">
            <input
              //type="hidden"
              type="file"
              placeholder="Avatar"
              name="avatar"
              required
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div>
            <select
              disabled
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
                Role{" "}
              </option>
              {state.map((elm) => (
                <option value={elm._id}>{elm.role}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary my-1" type="submit">
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

export default Edituser;
