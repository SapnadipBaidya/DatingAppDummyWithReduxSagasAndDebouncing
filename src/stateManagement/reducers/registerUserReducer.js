const initialState = {
    registerSuccess:false,
    loading: false,
    error: "",
  };
  
  const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_USER_REQUESTED":
        return { ...state, loading: true };
      case "REGISTER_USER_SUCCESS":
        return { ...state, loading: false, registerSuccess: action.registerUser };
      case "REGISTER_USER_FAILED":
        return { ...state, loading: false, error: action.message };
      default:
        return state;
    }
  };
  
  export default registerUserReducer;
  