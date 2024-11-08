import { useContext, useReducer } from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { EventContext } from "./EventContext";
import { useEvent } from "../hooks/useEvent";

const initialState = {
  events: [],
  users: [],
  followedUsers: [], // Ahora siempre está definido
  errorMessage: null,
};

const init = () => {
  return { ...initialState };
};

export const EventProvider = ({ children }) => {
  const [eventState, dispatch] = useReducer(eventsReducer, initialState, init);

  const {
    authState: { user },
  } = useContext(AuthContext);

  const { saveEvent, loadEvents, loadUsers, followUser, loadFollowedUsers } = useEvent(user, dispatch);

  return (
    <EventContext.Provider value={{ eventState, saveEvent, loadEvents, loadUsers, followUser, loadFollowedUsers }}>
      {children}
    </EventContext.Provider>
  );
};
