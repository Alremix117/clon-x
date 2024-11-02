import React, { useEffect, useState } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";

export const Following = () => {
  const [followedUsers, setFollowedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Estado para seguir o dejar de seguir
  const [followStatus, setFollowStatus] = useState({});

  useEffect(() => {
    const fetchFollowedUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        // Mezclar y seleccionar para obtener usuarios seguidos aleatorios
        const shuffledUsers = data.sort(() => 0.5 - Math.random());
        const selectedFollowedUsers = shuffledUsers.slice(0, 20); // Obtener 20 usuarios aleatorios
        setFollowedUsers(selectedFollowedUsers);
        // Inicializa el estado de seguimiento
        const initialFollowStatus = {};
        selectedFollowedUsers.forEach(user => {
          initialFollowStatus[user.id] = true; // Todos seguidos al inicio
        });
        setFollowStatus(initialFollowStatus);
      } catch (error) {
        console.error("Error fetching followed users:", error);
      }
    };

    fetchFollowedUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentFollowedUsers = followedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(followedUsers.length / usersPerPage);

  const toggleFollow = (userId) => {
    setFollowStatus((prev) => ({
      ...prev,
      [userId]: !prev[userId], // Alternar estado de seguimiento
    }));
  };

  return (
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
        <h1 style={{ marginBottom: "20px" }}>Seguidos</h1>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentFollowedUsers.map((user) => (
            <li
              key={user.id}
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
                  src={`https://robohash.org/${user.email}.png?size=50x50`} // Genera un avatar aleatorio
                  alt={user.name}
                  style={{
                    borderRadius: "50%",
                    marginRight: "10px",
                    width: "50px",
                    height: "50px",
                  }}
                />
                <span>{user.name}</span>
              </div>
              <button
                onClick={() => toggleFollow(user.id)}
                style={{
                  marginLeft: "auto",
                  padding: "5px 10px",
                  backgroundColor: followStatus[user.id] ? "red" : "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                {followStatus[user.id] ? "Dejar de seguir" : "Volver a seguir"}
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

      <div
        style={{
          width: "20%",
          padding: "20px",
          color: "white",
        }}
      >
        <h3 style={{ color: "white", marginBottom: "20px" }}>Trends</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px", color: "#8899A6" }}>#TrendingTopic1</li>
          <li style={{ marginBottom: "10px", color: "#8899A6" }}>#TrendingTopic2</li>
          <li style={{ marginBottom: "10px", color: "#8899A6" }}>#TrendingTopic3</li>
        </ul>
      </div>
    </div>
  );
};
