import React, { useContext } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { EventContext } from "../contexts/EventContext";

export const Profile = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState;
  const { eventState } = useContext(EventContext);
  
  // Filtrar eventos creados por el usuario logueado
  const userEvents = eventState.events.filter(event => event.userId === user.uid);

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
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            backgroundColor: "black",
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
            </ul>
          </nav>
        </div>

        {/* Contenido del perfil */}
        <div
          style={{
            width: "60%",
            padding: "20px",
            borderLeft: "1px solid #38444D",
            borderRight: "1px solid #38444D",
          }}
        >
          <h2 style={{ color: "white" }}>{user.displayName}'s Profile</h2>
          <p style={{ color: "white" }}>Email: {user.email}</p>

          <h3 style={{ color: "white" }}>Mis Eventos</h3>

          {/* Lista de eventos del usuario */}
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
                    <p style={{ color: "#8899A6" }}>Creado por: {user.displayName}</p>
                    <p style={{ color: "#8899A6" }}>Fecha: {event.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "#8899A6" }}>No has creado ningún evento.</p>
            )}
          </div>
        </div>

        
      </div>
    </>
  );
};
