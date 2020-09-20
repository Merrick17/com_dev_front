const initialuserList = []; // l'etat initile de chaque reducer elle doit etre la obligatoirement

const userReducer = (initialState = initialuserList, action) => {
  console.log("My data", action.data);
  switch (action.type) {
    case "GET_ALL_USERS":
      return action.data;
      case "GET_USERS":
      return action.data;
    case "ADD_USER":
      return [...initialState, action.data];
      default:
        return initialState;
      case "UPDATE_USER":
        return [...initialState, action.data];
    
  }
};

export default userReducer;
