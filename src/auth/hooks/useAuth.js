import { authTypes } from "../types/authTypes";

export const useAuth = (dispatch) => {
  const logInUser = (email, password) => {
    const action = {
      type: authTypes.logIn,

      payload: {
        uid: new Date().getMilliseconds(),
        email,
        password,
      },
    };

    localStorage.setItem("user", JSON.stringify(action.payload)),
      dispatch(action);

    return true;
  };

  const logOutUser = () => {
    localStorage.removeItem("user");

    const action = {
      type: authTypes.logOut,
    };

    dispatch(action);
  };
  return {
    logInUser,
    logOutUser,
  };
};
