const initialRoles = [];

const rolesReducer = (state = initialRoles, action) => {
  switch (action.type) {
    case "GET_ALL_ROLES":
      return action.data != undefined ? action.data : state;
    default:
      return state;
  }
};

export default rolesReducer;
