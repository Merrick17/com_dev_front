import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../actions/users";
import Swal from "sweetalert2";
const UserList = () => {
  const [userList, setUsersList] = useState([]);
  const history = useHistory(); // instance au navigation d'utilisateur
  const match = useRouteMatch(); // permet d'extraire le lien courant
  const dispatcher = useDispatch(); // permet d'exectuer les actions de reducer pour modifier l'etat
  const state = useSelector((state) => state); // permet d'acces à tous l'etat( données ) depuis n'importe quel emplacement
  useEffect(() => {
    // useEffect permet d'execctuer une tache lors de l'initialisation de l'interface
    dispatcher(getAllUsers());
    console.log(state.userReducer); //appel
    console.log("All State", state);

    //setUsersList(state.userReducer);
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="css/style.css" />
      <title>Welcome To </title>

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
              <th>Name</th>
              <th className="hide-sm">FirstName</th>
              <th className="hide-sm">Email</th>
              <th className="hide-sm">Phone</th>
              <th className="hide-sm">Role</th>
              <th className="hide-sm">Solde</th>
              <th className="hide-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {state.userReducer.map((elm) => {
              return (
                <tr>
                  <td>{elm.name}</td>
                  <td className="hide-sm">{elm.firstName}</td>
                  <td className="hide-sm">{elm.email}</td>
                  <td className="hide-sm">{elm.phone}</td>

                  <td className="hide-sm">
                    {elm.role != undefined ? elm.role.role : "undefined"}
                  </td>
                  <td className="hide-sm">{elm.soldeConge}</td>
                  <td>
                    {/* <Link to={`edituser/${elm._id}`}>Edit</Link> */}
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        history.push(`edituser/${elm._id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        Swal.fire({
                          title: "Etes Vous sure ?",
                          text:
                            "Veuillez vous confirmer si vous voulez supprimer !",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Oui!",
                          cancelButtonText: "Annuler",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            dispatcher(deleteUser(elm._id));
                            dispatcher(getAllUsers());
                            Swal.fire(
                              "Supprimer!",
                              "Utilisteur est supprimé avec succes.",
                              "success"
                            );
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserList;
