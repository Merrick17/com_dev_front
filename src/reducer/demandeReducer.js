const initialuserList = []; // l'etat initile de chaque reducer elle doit etre la obligatoirement

const demandeReducer = (initialState = initialuserList, action) => {
  console.log("My Demande data", action.data);
  switch (action.type) {
    case "GET_ALL_DEMANDE":
      return action.data;
    case "ADD_DEMANDE":
      return [...initialState, action.data];

    default:
      return initialState;
    case "UPDATE_DEMANDE":
      return [...initialState, action.data];
    case "GET_DEMANDEBY_SALARIER":
      return action.data;
    case "CLEAR_DEMANDE" : 
    return [] 
  }
};

export default demandeReducer;
