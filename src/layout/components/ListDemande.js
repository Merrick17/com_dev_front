import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDemande, switchSateDemande } from "../../layout/actions/demande";
import Moment from "react-moment";
import "moment-timezone";
function ListDemande() {
  const [userList, setUsersList] = useState([]);
  const history = useHistory(); // instance au navigation d'utilisateur
  const match = useRouteMatch(); // permet d'extraire le lien courant
  const dispatcher = useDispatch(); // permet d'exectuer les actions de reducer pour modifier l'etat
  const state = useSelector((state) => state); // permet d'acces à tous l'etat( données ) depuis n'importe quel emplacement
  useEffect(() => {
    // useEffect permet d'execctuer une tache lors de l'initialisation de l'interface
    dispatcher(getAllDemande());
    console.log(state.demandeReducer); //appel
    console.log("All State", state);

    //setUsersList(state.userReducer);
  }, []);
 /* const verifStatus = (id) => {
    if (id == 0) {
      return "En Attente";
    } else if (id == 1) {
      return "Accepter";
    } else {
      return "Refusé ";
    }
  };*/

  const displayBtns = (elm) => {
    if (elm.status == 0) {
      return (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatcher(
                switchSateDemande(elm._id, {
                  newstatus: 1,
                })
              );
            }}
          >
            Accepter
          </button>
          <br></br>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatcher(
                switchSateDemande(elm._id, {
                  newstatus: 2,
                })
              );
            }}
          >
            Refuser
          </button>
        </div>
      );
    } else if (elm.status == 1) {
      return <p className="text-success">Accepter</p>;
    } else {
      return <p className="text-danger">Refusé</p>;
    }
  };

  return (
    <div>
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
            <Link to="addemande">Add Demande</Link>
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
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          {/*state.userReducer.map((elm) => (
          <i className="fas fa-user" > Welcome {elm.firstName} 
          </i>
        ))*/}
        </p>
        <div className="dash-buttons">
          <Link to="adduser" className="btn btn-light">
            <i className="fas fa-user-circle text-primary" /> Add User
          </Link>
        </div>
        <h2 className="my-2">ListUser</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="hide-sm">Name</th>
              <th className="hide-sm">Comment</th>
              <th className="hide-sm">Salarier</th>
              <th className="hide-sm">Date_Depart</th>
              <th className="hide-sm">Date_Retour</th>
              <th className="hide-sm">Nombre de Jour</th>
              <th className="hide-sm">Etats</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {state.demandeReducer.map((elm) => {
              return (
                <tr>
                  <td className="hide-sm">{elm.name}</td>
                  <td className="hide-sm">{elm.comment}</td>
                  <td className="hide-sm">
                    {elm.salarier != null ? elm.salarier.name : ""}
                    <br></br>
                    {elm.salarier != null ? elm.salarier.firstName : ""}
                  </td>
                  <td className="hide-sm">
                    {" "}
                    <Moment date={elm.date_depart} format="DD/MM/YYYY" />
                  </td>
                  <td className="hide-sm">
                    {" "}
                    <Moment date={elm.date_retour} format="DD/MM/YYYY" />
                  </td>
                  <td className="hide-sm">{elm.nbrJrs}</td>
                  {/* <td className="hide-sm">{verifStatus(elm.status)}</td> */}
                  <td>
                    {/* <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatcher(
                          switchSateDemande(elm._id, {
                            newStatus: 1,
                          })
                        );
                      }}
                    >
                      Accepter
                    </button>
                    <br></br>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatcher(
                          switchSateDemande(elm._id, {
                            newStatus: 2,
                          })
                        );
                      }}
                    >
                      Refuser
                    </button> */}
                    {
                      displayBtns(elm)
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default ListDemande;
