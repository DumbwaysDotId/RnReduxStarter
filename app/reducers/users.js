const initialState = {
  users: [],
  isLoading: false,
  isSaved: false,
  isError: false
}

const usersReducer = function(state=initialState, action){
  switch (action.type) {
    case "ALL_USERS_PENDING":
      return {...state, isLoading: true}
    case "ALL_USERS_FULFILLED":
      return {...state, users: action.payload.data, isLoading: false}
    case "CREATE_USER_FULFILLED":
      return {...state, isSaved: true}
    case "CREATE_USER_REJECTED":
      return {...state, isError: true}
    default:
      return state
  }
}

export default usersReducer
