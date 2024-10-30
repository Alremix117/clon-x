import {
  authUser,
  registerUser,
  authWithGoogle,
} from "../../firebase/authProviders";
import { authTypes } from "../types/authTypes";

export const useAuth = (dispatch) => {
  const logInUser = async (email, password) => {
    const { ok, uid, photoURL, displayName, errorMessage } = await authUser(
      email,
      password
    );

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

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

  const signUpUser = async (email, password, displayName) => {
    const { ok, uid, photoURL, errorMessage } = await registerUser(
      email,
      password,
      displayName
    );

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;
  };

  const logInWithGoogle = async () => {
    const { ok, uid, displayName, email, photoURL, errorMessage } =
      await authWithGoogle();

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = {
      uid,
      email,
      displayName,
      photoURL,
    };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;

  };

  return { logInUser, logOutUser, signUpUser, logInWithGoogle };
};
