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

  // Cargar eventos al montar el componente
  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  const handleUserClick = () => {
    navigate("/UsersProfile");
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
          }}
        >
          <h2 style={{ color: "white", marginBottom: "20px" }}>
            What's happening
          </h2>

          {/* Events List */}
          <div className="row">
            {events.map((event) => (
              <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
                <div
                  className="card animate__animated animate__fadeInUp"
                  style={{
                    backgroundColor: "#192734",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                  onClick={handleUserClick}
                >
                  <img
                    src={event.imageUrl} // Asegúrate de que este campo existe en tu objeto event
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
                  <p style={{ color: "#8899A6" }}>Fecha: {event.date}</p>
                </div>
              </div>
            ))}
          </div>

          {errorMessage && (
            <p style={{ color: "red" }}>Error loading events: {errorMessage}</p>
          )}
        </div>

        {/* Trends Section */}
        <div
          style={{
            width: "20%",
            padding: "20px",
            color: "white",
          }}
        >
          <h3 style={{ color: "white", marginBottom: "20px" }}>Trends</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "10px", color: "#8899A6" }}>
              #TrendingTopic1
            </li>
            <li style={{ marginBottom: "10px", color: "#8899A6" }}>
              #TrendingTopic2
            </li>
            <li style={{ marginBottom: "10px", color: "#8899A6" }}>
              #TrendingTopic3
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
