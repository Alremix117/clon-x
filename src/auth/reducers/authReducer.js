import { authTypes } from "../types/authTypes";

export const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case authTypes.logIn:
      return {
        ...state,
        logged: true,
        user: action.payload, // Contiene displayName y firstName
        errorMessage: null,
      };

    case authTypes.logOut:
      return {
        logged: false,
        user: {},
        errorMessage: null,
      };

    case authTypes.error:
      return {
        ...state,
        logged: false,
        errorMessage: action.payload?.errorMessage,
      };

    default:
      return state;
  }
};