import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
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

  const loadUsers = async () => {
    try {
      const collectionRef = collection(FirebaseDB, "users");

      const fbDocs = await getDocs(collectionRef);

      const users = [];

      fbDocs.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      const action = {
        type: eventsTypes.loadUsers,
        payload: users,
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

  ///////////
  const followUser = async (followedUserId) => {
    try {
      const followRef = doc(
        collection(FirebaseDB, "follows"),
        `${loggedUser.uid}_${followedUserId}`
      );

      await setDoc(followRef, {
        followerId: loggedUser.uid,
        followedId: followedUserId,
        followedAt: new Date().toISOString(),
      });

      const action = {
        type: eventsTypes.followUser,
        payload: { followerId: loggedUser.uid, followedId: followedUserId },
      };
      dispatch(action);
    } catch (error) {
      console.error("Error following user:", error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const loadFollowedUsers = async () => {
    try {
      const q = query(
        collection(FirebaseDB, "follows"),
        where("followerId", "==", loggedUser.uid)
      );
      const querySnapshot = await getDocs(q);

      const followedUsers = [];
      querySnapshot.forEach((doc) => {
        followedUsers.push(doc.data().followedId);
      });

      const action = {
        type: eventsTypes.loadFollowedUsers,
        payload: followedUsers,
      };
      dispatch(action);
    } catch (error) {
      console.error("Error fetching followed users:", error.message);
    }
  };

  return { saveEvent, loadEvents, loadUsers, followUser, loadFollowedUsers };
};
