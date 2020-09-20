import axios from "axios";
import { UpdateUser } from "../actions/users";
import { authUser } from "../actions/auth";
export const getAllUsers = () => async (dispatch) => {
  let result = await axios.get("http://localhost:3000/users/allusers");
  let data = result.data.users;
  return dispatch({
    type: "GET_ALL_USERS",
    data: data,
  });
};

export const getAllDemande = () => async (dispatch) => {
  let result = await axios.get("http://localhost:3000/demande/getdemande");

  return dispatch({
    type: "GET_ALL_DEMANDE",
    data: result.data.message,
  });
  authUser();
};
export const getDemandebysalarier = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let result = await axios.get(`http://localhost:3000/demande/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });

  return dispatch({
    type: "GET_DEMANDEBY_SALARIER",
    data: result.data.demandes,
  });
};
export const addemande = (userData) => async (dispatch) => {
  console.log(userData);
  let token = localStorage.getItem("token");
  dispatch({
    type: "ADD_DEMANDE",
    data: userData,
  });
  let result = await axios.post(
    "http://localhost:3000/demande/addemande",
    userData,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  getAllUsers();
  getAllDemande();
};

export const switchSateDemande = (iddemande, etat) => async (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({
    type: "UPDATE_DEMANDE",
    data: etat,
  });
  let result = await axios.put(
    `http://localhost:3000/demande/updatedemande/${iddemande}`,
    etat,
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
  UpdateUser();
  getAllDemande();
};

export const getAllDemandeBySalarier = () => async (dispatch) => {
  let id = localStorage.getItem("id");
  let token = localStorage.getItem("token");

  let result = await axios.get(`http://localhost:3000/demande/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  console.log("my result",result)
  return dispatch({
    type: "GET_DEMANDEBY_SALARIER",
    data: result.data.demandes,
  });
};
