import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

const ProfileUsers = () => {
  const { createdBy } = useParams(); // Renombrado a createdBy para recibir el nombre
  const [userInfo, setUserInfo] = useState(null);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        const userQuery = query(
          collection(FirebaseDB, "users"),
          where("displayName", "==", createdBy)
        );
        const userSnapshot = await getDocs(userQuery);

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUserInfo(userData);
        }

        // Fetch events for this user
        const eventQuery = query(
          collection(FirebaseDB, "events"),
          where("createdBy", "==", createdBy)
        );
        const eventSnapshot = await getDocs(eventQuery);

        const events = eventSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserEvents(events);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [createdBy]);

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        overflowY: "auto",
      }}
    >
      {/* Perfil del usuario */}
      <div
        style={{
          width: "80%",
          padding: "20px",
          borderLeft: "1px solid #38444D",
          borderRight: "1px solid #38444D",
        }}
      >
        {userInfo ? (
          <>
            <h2 style={{ color: "white" }}>{userInfo.displayName}'s Profile</h2>
            <p style={{ color: "white" }}>Email: {userInfo.email}</p>

            <h3 style={{ color: "white" }}>Eventos</h3>
            <div className="row">
              {userEvents.length > 0 ? (
                userEvents.map((event) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
                    <div
                      className="card animate__animated animate__fadeInUp"
                      style={{
                        backgroundColor: "#192734",
                        padding: "15px",
                        borderRadius: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src={event.imageUrl}
                        alt={`Imagen del evento ${event.name}`}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      />
                      <h3 style={{ color: "white" }}>{event.name}</h3>
                      <p style={{ color: "#8899A6" }}>{event.description}</p>
                      <p style={{ color: "#8899A6" }}>Creado por: {userInfo.displayName}</p>
                      <p style={{ color: "#8899A6" }}>Fecha: {event.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: "#8899A6" }}>No se encontraron eventos para este usuario.</p>
              )}
            </div>
          </>
        ) : (
          <p style={{ color: "#8899A6" }}>Cargando datos del usuario...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileUsers;
