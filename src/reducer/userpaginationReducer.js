const initPagination = {
  count: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  nextPage: 0,
  page: 1,
  pages: 0,
  previousPage: null,
};

 const  userPaginationReducer = (state = initPagination, action) => {
  switch (action.type) {
    case "GET_PAGINATION_USERS":
      return action.data;
    default:
      return state;
  }
};

export default userPaginationReducer ; 