import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser, getUser } from "../actions/users";
import { getAllRoles } from "../actions/roles";
import { logoutUser } from "../actions/auth";
import Moment from "react-moment";
import "moment-timezone";
//import "./styles.css";
import { getAllDemandeBySalarier } from "../actions/demande";
const Userprofile = () => {
  const [userList, setUsersList] = useState([]);
  const history = useHistory(); // instance au navigation d'utilisateur
  const match = useRouteMatch(); // permet d'extraire le lien courant
  const dispatcher = useDispatch(); // permet d'exectuer les actions de reducer pour modifier l'etat
  const state = useSelector((state) => state); // permet d'acces à tous l'etat( données ) depuis n'importe quel emplacement
  useEffect(() => {
    // useEffect permet d'execctuer une tache lors de l'initialisation de l'interface

    dispatcher(getAllDemandeBySalarier());

    console.log(state.userReducer); //appel
    console.log("All State", state);

    //setUsersList(state.userReducer);
  }, []);
  const displayBtns = (elm) => {
    if (elm.status == 0) {
      return <p className="text-primary">En Attente</p>;
    } else if (elm.status == 1) {
      return <p className="text-success">Accepter</p>;
    } else {
      return <p className="text-danger">Refusé</p>;
    }
  };
  return (
    <div class="container">
      <div className="profiles">
        <div className="profile bg-light">
          <div className="round-img">
            {state.authReducer.img != undefined &&
            state.authReducer.img.includes("gravatar") ? (
              <img
                src={"https://" + state.authReducer.img}
                alt=""
                class="img-rounded"
              />
            ) : (
              <img
                src={`http://localhost:3000/${state.authReducer.img}`}
                alt=""
                class="img-rounded"
              />
            )}
          </div>
          <div class="col-md-6 details">
            <blockquote>
              <h5>
                {state.authReducer.firstName + " " + state.authReducer.name}
              </h5>
              <small>
                <cite title="Source Title">
                  {state.authReducer.email}
                  <i class="icon-map-marker"></i>
                </cite>
              </small>
              <br></br>
              <small>
                <cite title="Source Title">
                  soldeConge: {state.authReducer.soldeConge}
                  <i class="icon-map-marker"></i>
                </cite>
              </small>
              <br></br>
              <small>
                <cite title="Source Title">
                  Phone: {state.authReducer.phone}
                  <i class="icon-map-marker"></i>
                </cite>
              </small>
              <br/>
              <small>
                <cite title="Source Title">
                  Role: {state.authReducer.roleName}
                  <i class="icon-map-marker"></i>
                </cite>
              </small>
            </blockquote>
            <br />
            <div className="row">
              <div className="col-md-6" >
              <Link className="btn btn-primary" to="/adddemandesalarier">
              Ajouter demande
            </Link>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6">
              <button
              className="btn btn-primary"
              onClick={() => {
                history.push(`/editprofile`);
              }}
            >
              Edit
            </button>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
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
                  {displayBtns(elm)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Userprofile;
