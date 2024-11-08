import {
  authUser,
  registerUser,
  authWithGoogle,
} from "../../firebase/authProviders";
import { authTypes } from "../types/authTypes";
import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

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
    localStorage.setItem("user", JSON.stringify(payload));
    dispatch({ type: authTypes.logIn, payload });

    return true;
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    dispatch({ type: authTypes.logOut });
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

    // Guardar el usuario en Firestore
    await setDoc(doc(FirebaseDB, "users", uid), {
      displayName,
      email,
      userId: uid,
    });

    const payload = { uid, email, photoURL, displayName };
    localStorage.setItem("user", JSON.stringify(payload));
    dispatch({ type: authTypes.logIn, payload });

    return true;
  };

  const logInWithGoogle = async () => {
    const { ok, uid, displayName, email, photoURL, errorMessage } =
      await authWithGoogle();
    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const firstName = displayName.split(" ")[0];
    const payload = { uid, email, displayName, firstName, photoURL };

    localStorage.setItem("user", JSON.stringify(payload));
    await setDoc(doc(FirebaseDB, "users", uid), {
      displayName,
      email,
      userId: uid,
    });
    dispatch({ type: authTypes.logIn, payload });

    return true;
  };

  return { logInUser, logOutUser, signUpUser, logInWithGoogle };
};
