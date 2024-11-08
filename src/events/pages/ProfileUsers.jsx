import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

const ProfileUsers = () => {
  const { createdBy } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [userEvents, setUserEvents] = useState([]);
  const [profileImage, setProfileImage] = useState("");

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

    const fetchProfileImage = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setProfileImage(data.results[0].picture.large);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchUserData();
    fetchProfileImage();
  }, [createdBy]);

  return (
    <div
      style={{
        backgroundColor: "#14171A",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "1000px",
          backgroundColor: "#1C1E21",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        {userInfo ? (
          <>
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginBottom: "20px",
                border: "4px solid #38444D",
              }}
            />
            <h2 style={{ color: "#FFFFFF" }}>{userInfo.displayName}'s Profile</h2>
            <p style={{ color: "#8899A6" }}>Email: {userInfo.email}</p>

            <h3 style={{ color: "#FFFFFF", marginTop: "30px" }}>Events</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
              {userEvents.length > 0 ? (
                userEvents.map((event) => (
                  <div
                    key={event.id}
                    style={{
                      backgroundColor: "#192734",
                      padding: "20px",
                      borderRadius: "10px",
                      width: "100%",
                      maxWidth: "800px",  // Hacer la tarjeta más ancha
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {event.imageUrl && (
                      <img
                        src={event.imageUrl}
                        alt={`Imagen del evento ${event.name}`}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      />
                    )}
                    <h3 style={{ color: "white" }}>{event.name}</h3>
                    <p style={{ color: "#8899A6" }}>{event.description}</p>
                    <p style={{ color: "#8899A6" }}>Fecha: {event.date}</p>
                  </div>
                ))
              ) : (
                <p style={{ color: "#8899A6" }}>No events found for this user.</p>
              )}
            </div>
          </>
        ) : (
          <p style={{ color: "#8899A6" }}>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileUsers;
