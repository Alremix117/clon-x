import {
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { eventsTypes } from "../types/eventsTypes";

export const useEvent = (loggedUser, dispatch) => {
  const saveEvent = async (event) => {
    try {
      const newDoc = doc(collection(FirebaseDB, "events"));

      await setDoc(newDoc, {
        ...event,
        userId: loggedUser.uid,
        createdBy: loggedUser.displayName, // Nombre del usuario que creó el evento
        createdAt: new Date().toISOString(), // Hora exacta de creación
      });

      event.id = newDoc.id;

      const action = { type: eventsTypes.saveEvent, payload: event };

      dispatch(action);
    } catch (error) {
      dispatch({ type: eventsTypes.error, payload: error.message });
    }
  };

  const loadEvents = async () => {
    try {
      const collectionRef = collection(FirebaseDB, "events");

      const fbDocs = await getDocs(collectionRef);

      const events = [];

      fbDocs.forEach((doc) => {
        events.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const action = {
        type: eventsTypes.loadEvents,
        payload: events,
      };

      
      dispatch(action);
    } catch (error) {
      const action = {
        type: eventsTypes.error,
        payload: { errorMessage: error.message },
      };
      dispatch(action);
    }
  };

  return { saveEvent, loadEvents };
};
