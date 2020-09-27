import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  deleteUser,
  getAllUsersNextPage,
  searchUsers,
} from "../../actions/users";
import Swal from "sweetalert2";
import userPaginationReducer from "../../../reducer/userpaginationReducer";
const UserList = () => {
  const [userList, setUsersList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const history = useHistory(); // instance au navigation d'utilisateur
  const match = useRouteMatch(); // permet d'extraire le lien courant
  const dispatcher = useDispatch(); // permet d'exectuer les actions de reducer pour modifier l'etat
  const state = useSelector((state) => state);
  const [selectedPage, setSelectedPage] = useState(1);
  const [pages, setPages] = useState([]); // permet d'acces à tous l'etat( données ) depuis n'importe quel emplacement
  useEffect(() => {
    // useEffect permet d'execctuer une tache lors de l'initialisation de l'interface
    dispatcher(getAllUsers());
    console.log(state.userReducer); //appel
    console.log("All State", state);
    let counter = 1;
    let temp = [];
    for (var i = 0; i < state.userPaginationReducer.pages; i++) {
      temp.push(counter);
      counter++;
    }
    setPages(temp);

    //setUsersList(state.userReducer);
  }, []);

  return (
    <div>
      <link rel="stylesheet" href="css/style.css" />
      <title>Welcome To </title>

      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <br></br>
        <div>
          <br />
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <form class="card card-sm">
                <div class="card-body row no-gutters align-items-center">
                  <div class="col-auto">
                    <i class="fas fa-search h4 text-body"></i>
                  </div>

                  <div class="col">
                    <input
                      class="form-control form-control-lg form-control-borderless"
                      type="search"
                      placeholder="Entrer le nom à rechercher"
                      value={searchField}
                      onChange={(event) => {
                        setSearchField(event.target.value);
                      }}
                    />
                  </div>

                  <div class="col-auto" style={{ paddingLeft: "5%" }}>
                    <button
                      class="btn btn-lg btn-success"
                      type="button"
                      onClick={() => {
                        dispatcher(searchUsers(searchField));
                      }}
                    >
                      Rechercher
                    </button>
                  </div>
                  <div class="col-auto" style={{ paddingLeft: "5%" }}>
                    <button
                      class="btn btn-lg btn-danger"
                      type="button"
                      onClick={() => {
                        dispatcher(getAllUsers());
                        setSearchField("");
                      }}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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
      <div className="row">
        <div className="col-md-8">
          {userPaginationReducer.pages > 1 ? (
            <ul class="pagination">
              <li class="page-item">
                {state.userPaginationReducer.hasPreviousPage ? (
                  <button
                    class="page-link"
                    onClick={() => {
                      setSelectedPage(selectedPage - 1);
                      dispatcher(getAllUsersNextPage(selectedPage - 1));
                    }}
                  >
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}
              </li>
              {pages.map((elm) => (
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={() => {
                      setSelectedPage(elm);
                      dispatcher(getAllUsersNextPage(elm));
                    }}
                  >
                    {elm}
                  </button>
                </li>
              ))}

              <li class="page-item">
                <button
                  class="page-link"
                  onClick={() => {
                    setSelectedPage(selectedPage + 1);
                    dispatcher(getAllUsersNextPage(selectedPage + 1));
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
