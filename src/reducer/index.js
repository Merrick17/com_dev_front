import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import rolesReducer from "./rolesReducer";
import demandeReducer from "./demandeReducer";
import userPaginationReducer from "./userpaginationReducer";
import demandePaginationReducer from "./demandPaginationReducer";
const rootReducer = combineReducers({
  userReducer,
  authReducer,
  rolesReducer,
  demandeReducer,
  userPaginationReducer,
  demandePaginationReducer,
}); // combine reducer permet de fusioner tous les reducer dans l'application en un seul

export default rootReducer;
