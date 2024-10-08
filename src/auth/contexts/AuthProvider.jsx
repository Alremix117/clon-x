import { AuthContext } from "./AuthContext";
import { authReducer } from "../reducers/authReducer";
import { useReducer } from "react";
import { useAuth } from "../hooks/useAuth";

const initialState = {
  logged: false,
  user: {},
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

 const isLogged = (!user) ? false : true;

  const state = {
    logged: isLogged,

    user,
  };

  
  return state;
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const { logInUser, logOutUser } = useAuth(dispatch);

  return (
    <AuthContext.Provider value={{ authState, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
