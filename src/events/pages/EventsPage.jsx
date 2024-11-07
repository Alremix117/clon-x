import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

export const EventsPage = () => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
  const {
    eventState: { events, errorMessage },
    loadEvents,
  } = useContext(EventContext);

  const {
    authState: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const handleEventClick = (event) => {
    if (event.userId !== user.uid) {
      navigate("/UsersProfile");
    }
  };

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            backgroundColor: "black",
            position: "sticky", // Mantiene la barra lateral visible
            top: 0, // Se fija en la parte superior al hacer scroll
            height: "100vh", // Asegura que ocupe toda la altura
            overflowY: "auto", // Permite el scroll si es necesario
          }}
        >
          <img
            src={LogoA}
            alt="LogoA"
            style={{
              width: "200px",
              height: "200px",
            }}
          />
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/events"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/profile"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Profile
                </Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/following"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Following
                </Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/followers"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Followers
                </Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/new-event"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Post
                </Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/usersprofile"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={handleLogout}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#FF4500",
              color: "white",
              borderRadius: "50px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Deslogear
          </button>
        </div>

        {/* Content Area */}
        <div
          style={{
            width: "60%",
            padding: "20px",
            borderLeft: "1px solid #38444D",
            borderRight: "1px solid #38444D",
            height: "100vh", // Asegura que ocupe toda la altura
            overflowY: "auto", // Permite el scroll si es necesario
          }}
        >
          <h2 style={{ color: "white", marginBottom: "20px" }}>
            What's happening
          </h2>

          {/* Events List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: "#192734",
                  padding: "10px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "90%",
                  margin: "0 auto",
                }}
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.imageUrl}
                  alt={`Imagen del evento ${event.name}`}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ color: "white", fontSize: "18px" }}>{event.name}</h3>
                <p style={{ color: "#8899A6" }}>{event.description}</p>
                <p style={{ color: "#8899A6" }}>
                  Creado por: {event.createdBy} <br />
                  Fecha de creación:{" "}
                  {new Date(event.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {errorMessage && (
            <p style={{ color: "red" }}>Error loading events: {errorMessage}</p>
          )}
        </div>

        
        
      </div>
    </>
  );
};
