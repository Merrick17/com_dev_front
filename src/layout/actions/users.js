import axios from "axios";
import Swal from "sweetalert2";
export const getAllUsers = () => async (dispatch) => {
  let result = await axios.get(
    "http://localhost:3000/users/allusers?pagination=5"
  );
  let data = result.data.users;
  dispatch({
    type: "GET_PAGINATION_USERS",
    data: result.data.paginationData,
  });
  return dispatch({
    type: "GET_ALL_USERS",
    data: data,
  });
};
export const searchUsers = (name) => async (dispatch) => {
  let result = await axios.post(
    "http://localhost:3000/users/search",
    {
      name: name,
    }
  );
  let data = result.data.users;
  dispatch({
    type: "GET_PAGINATION_USERS",
    data: result.data.paginationData,
  });
  return dispatch({
    type: "GET_ALL_USERS",
    data: data,
  });
};
export const getAllUsersNextPage = (nextPage) => async (dispatch) => {
  let result = await axios.get(
    "http://localhost:3000/users/allusers?pagination=5&page=" + nextPage
  );
  let data = result.data.users;
  dispatch({
    type: "GET_PAGINATION_USERS",
    data: result.data.paginationData,
  });
  return dispatch({
    type: "GET_ALL_USERS",
    data: data,
  });
};

export const getUser = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let result = await axios.get(`http://localhost:3000/users/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  let data = result.data.users;
  return dispatch({
    type: "GET_USER",
    data: data,
  });
};
export const addANewUser = (userData) => async (dispatch) => {
  console.log(userData);
  let token = localStorage.getItem("token");
  dispatch({
    type: "ADD_USER",
    data: userData,
  });
  let result = await axios.post("http://localhost:3000/users/add", userData, {
    headers: {
      "x-access-token": token,
    },
  });

  getAllUsers();
};
export const UpdateUser = (userData, id) => async (dispatch) => {
  console.log(userData);
  console.log(id);
  let token = localStorage.getItem("token");
  dispatch({
    type: "UPDATE_USER",
    data: userData,
  });
  let result = await axios.put(`http://localhost:3000/users/${id}`, userData, {
    headers: {
      "x-access-token": token,
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(result);

  getAllUsers();
};

export const deleteUser = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let result = await axios.delete(`http://localhost:3000/users/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
  console.log(result);

  getAllUsers();
};
