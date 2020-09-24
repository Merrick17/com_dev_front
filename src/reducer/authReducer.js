//import {GET_USER_DATA,AUTH_USER,LOGOUT_USER} from "../constants/userConstants"
const initUserState = {
  email: "",
  firstName: "",
  name: "",
  role: "",
  phone: 0,
  auth: false,
  img:""
};

const authReducer = (initialState = initUserState, action) => {
  switch (action.type) {
    case "GET_USER_DATA": // les types d'action qui vont modifier l'etat
      return initialState; // la nouvelle valeur de l'etat
    case "AUTH_USER":
      //alert(action.data)
      return action.data;
    case "LOGOUT_USER":
      return action.data;
    default:
      return initialState;
  }
};

export default authReducer;
