import { authTypes } from "../types/authTypes";

export const authReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case authTypes.logIn:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case authTypes.logOut:
      return {
        logged: false,
        user: {},
      };

    default:
      return state;
  }
};
