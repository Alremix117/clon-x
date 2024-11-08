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

    default:
      return state;
  }
};
