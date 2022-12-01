const initialState = {
    loginClick: false,
    registerClick:false
   
  };
  
  const commonClickReducer = (state = initialState, action) => {
    console.log("dipu",action.type)
    switch (action.type) {
      case "LOGINCLICK":
        return { ...state, loginClick: true,
            registerClick:false };
      case "REGISTERCLICK":
        return { ...state, loginClick: false,
            registerClick:true };
     case "RESETALLCLICKS":
        return { ...state, loginClick: false,
            registerClick:false };
      default:
        return state;
    }
  };
  
  export default commonClickReducer;
  