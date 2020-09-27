import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../actions/users";
const Useredit = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rolesReducer); //pour selectionner tous les roles
  const selectedUser = useSelector((state) => state.authReducer); //pour selectioner un utilisateur unique
  //console.log(userList); 
  useEffect(() => {
    //console.log("User List", userList);
    let id = localStorage.getItem("id");
     //let selectedUser = userList.find((state) => state.authReducer.data == id);
    setName(selectedUser.name);
    setfirstName(selectedUser.firstName);
    setEmail(selectedUser.email);
    setPhone(selectedUser.phone);
    setPassword(selectedUser.password);
    // console.log("userID ", id);
     setUserId(id);
  }, []);
  const [name, setName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState("");
  const [file, setFile] = useState(undefined);

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Update User</h1>

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
              //type="hidden"
              type="text"
              placeholder="Password"
              name="name"
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
            />
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
          <button
            className="btn btn-primary my-1"
            onClick={(event) => {
              event.preventDefault();
              let formData = new FormData();

              formData.append("imageUrl", file);
              formData.append("name", name);
              formData.append("email", email);
              formData.append("phone", phone);
              formData.append("firstName", firstName);

              dispatch(UpdateUser(formData, userId));
            }}
          >
            Save
          </button>
          <button className="btn btn-light my-1" onClick={() => {}}>
            Go Back
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Useredit;
