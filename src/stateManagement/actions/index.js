export const CLICKLOGIN = (data) => {
  return (dispatch) => {
    
    dispatch({
      type: "LOGINCLICK",
      payload: data,
    });
  };
};

export const CLICKREGISTER = (data) => {

  return (dispatch) => {
    dispatch({
      type: "REGISTERCLICK",
      payload: data,
    });
  };
};

export const RESETALLCLICKS = (data) => {
  return (dispatch) => {
    dispatch({
      type: "RESETALLCLICKS",
      payload: data,
    });
  };
};


export const LoginRequested = (data) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_USER_REQUESTED",
      payload: data,
    });
  };
};


export const RegisterRequested = (data) => {
  return (dispatch) => {
    dispatch({
      type: "REGISTER_USER_REQUESTED",
      payload: data,
    });
  };
};




