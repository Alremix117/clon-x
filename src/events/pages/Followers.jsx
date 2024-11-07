import React, { useEffect, useState } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";

export const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const followersPerPage = 10;

  // Mapa para rastrear el estado de seguimiento de cada usuario
  const [followStatus, setFollowStatus] = useState({});

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        // Mezclar y seleccionar para obtener seguidores aleatorios
        const shuffledFollowers = data.sort(() => 0.5 - Math.random());
        const selectedFollowers = shuffledFollowers.slice(0, 20); // Obtener 20 seguidores aleatorios
        setFollowers(selectedFollowers);

        // Inicializar el estado de seguimiento para cada usuario
        const initialFollowStatus = {};
        selectedFollowers.forEach(follower => {
          initialFollowStatus[follower.id] = true; // Todos empiezan como seguidos
        });
        setFollowStatus(initialFollowStatus);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, []);

  const indexOfLastFollower = currentPage * followersPerPage;
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage;
  const currentFollowers = followers.slice(indexOfFirstFollower, indexOfLastFollower);
  const totalPages = Math.ceil(followers.length / followersPerPage);

  const toggleFollow = (id) => {
    setFollowStatus((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia el estado de seguimiento del usuario
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
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
              <Link to="/events" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link to="/profile" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>
                Profile
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link to="/following" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>
                Following
              </Link>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <Link to="/followers" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>
                Followers
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>

      <div
        style={{
          width: "60%",
          padding: "20px",
          borderLeft: "1px solid #38444D",
          borderRight: "1px solid #38444D",
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Seguidores</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentFollowers.map((follower) => (
            <li
              key={follower.id}
              style={{
                color: "#8899A6",
                marginBottom: "10px",
                backgroundColor: "#2C2F33",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={`https://robohash.org/${follower.email}.png?size=50x50`} // Genera un avatar aleatorio
                  alt={follower.name}
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <span>{follower.name}</span>
              </div>
              <button
                onClick={() => toggleFollow(follower.id)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: followStatus[follower.id] ? "#7289DA" : "#F04747",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                {followStatus[follower.id] ? "Dejar de seguir" : "Volver a seguir"}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "gray", color: "white", border: "none", borderRadius: "5px" }}
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ padding: "5px 10px", backgroundColor: "gray", color: "white", border: "none", borderRadius: "5px" }}
          >
            Siguiente
          </button>
        </div>
      </div>

      
    </div>
  );
};
