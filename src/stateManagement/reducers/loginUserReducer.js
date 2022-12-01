const initialState = {
    loginUser: [],
    loading: false,
    error: "",
  };
  
  const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_USER_REQUESTED":
        return { ...state, loading: true };
      case "LOGIN_USER_SUCCESS":
        return { ...state, loading: false, loginUser: action.loginUser };
      case "LOGIN_USER_FAILED":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default loginUserReducer;
  