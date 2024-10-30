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
          events: [...state.events, action.payload], // Usar el operador de propagación
        };
      

    case eventsTypes.updateEvent:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === action.payload.id) {
            return { ...action.payload };
          }

          return event;
        }),
      };

    case eventsTypes.error:
      return {
        ...state,
        errorMessage: action.payload?.errorMessage,
      };

    default:
      return state;
  }
};
