import { eventsTypes } from "../types/eventsTypes";

export const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case eventsTypes.loadEvents:
      return {
        ...state,
        events: [...action.payload],
      };

    case eventsTypes.saveEvent:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case eventsTypes.updateEvent:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? { ...action.payload } : event
        ),
      };

    case eventsTypes.error:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage,
      };

    case eventsTypes.loadUsers:
      return {
        ...state,
        users: [...action.payload],
      };

      case eventsTypes.followUser:
        return {
          ...state,
          followedUsers: [...state.followedUsers, action.payload], // Agrega el nuevo seguido al estado
        };
      

    case eventsTypes.loadFollowedUsers:
      return {
        ...state,
        followedUsers: action.payload, // Add the followed users to the state
      };

    default:
      return state;
  }
};
