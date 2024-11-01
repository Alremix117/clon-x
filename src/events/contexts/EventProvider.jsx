import { useContext, useReducer } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { EventContext } from "./EventContext";
import { useEvent } from "../hooks/useEvent";

const initialState = {
  events: [],
  errorMessage: null,
};

const init = () => {
  return {
    events: [],
    errorMessage: null,
  };
};

export const EventProvider = ({ children }) => {
  const [eventState, dispatch] = useReducer(eventsReducer, initialState, init);

  const {
    authState: { user },
  } = useContext(AuthContext);

  const { saveEvent, loadEvents } = useEvent(user, dispatch);

  return (
    <EventContext.Provider value={{ eventState, saveEvent, loadEvents }}>
      {children}
    </EventContext.Provider>
  );
};
