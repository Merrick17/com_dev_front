import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
//import { addANewUser } from "../actions/users";
import { addemande } from "../actions/demande";
const AddDemandeUser = () => {
  const [name, setName] = useState("");
  const history = useHistory();

  const [comment, setComment] = useState("");
  const [salarier, setSalarier] = useState(localStorage.getItem("id"));
  const [date_depart, setDate_depart] = useState("");
  const [date_retour, setDate_retour] = useState("");
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <link rel="stylesheet" href="css/style.css" />
      {/* <title>Welcome To </title>
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html">
            <i className="fas fa-code" /> DevConnector
          </a>
        </h1>
        <ul>
          <li>
            <Link to="listDemande">Lists Demande</Link>
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
      </nav> */}
      <section className="container">
        <h1 className="large text-primary">Ajouter une nouvelle demande</h1>

        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Title"
              name="title"
              required
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-group"></div>

          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={date_depart}
              onChange={(event) => {
                setDate_depart(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={date_retour}
              onChange={(event) => {
                setDate_retour(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols={30}
              rows={5}
              placeholder="Job Description"
              //defaultValue={""}
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary my-1"
            onClick={(event) => {
              event.preventDefault();
              let sendData = {
                name: name,
                comment: comment,
                salarier: salarier,
                date_depart: date_depart,
                date_retour: date_retour,
              };
              console.log("hello");
              dispatch(addemande(sendData));
              history.goBack();
            }}
          >
            Save
          </button>
          <button
            className="btn btn-light my-1"
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default AddDemandeUser;
