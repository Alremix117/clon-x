import React, { useEffect, useState } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config"; // Asegúrate de que esta importación sea correcta

export const UsersProfile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Para controlar la carga
  const [error, setError] = useState(null); // Para mostrar errores si los hay

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(FirebaseDB, "users");
        const usersSnapshot = await getDocs(usersCollection);
        
        // Revisamos si existen documentos
        if (usersSnapshot.empty) {
          console.warn("No users found in Firestore.");
          setError("No users found.");
        } else {
          const usersList = usersSnapshot.docs.map((doc) => doc.data());
          setUsers(usersList); // Guardamos los datos en el estado
        }
      } catch (error) {
        console.error("Error fetching users: ", error);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false); // Finalizamos la carga
      }
    };
    
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>; // Mensaje de carga
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>; // Mensaje de error si falla
  }

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
            </ul>
          </nav>
        </div>

        <div
          style={{
            width: "60%",
            padding: "20px",
            borderLeft: "1px solid #38444D",
            borderRight: "1px solid #38444D",
            backgroundColor: "black",
            borderRadius: "10px",
            color: "white",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h1>Usuarios Registrados</h1>
          <ul>
            {users.length > 0 ? (
              users.map((user, index) => (
                <li key={index} style={{ marginBottom: "20px" }}>
                  <h2 style={{ color: "#1DA1F2" }}>{user.displayName || "Unknown User"}</h2>
                  <p>{user.email || "No email provided"}</p>
                  {user.bio && <p>{user.bio}</p>}
                  <p>
                    <strong>Followers:</strong> {user.followers || 0} | <strong>Following:</strong> {user.following || 0}
                  </p>
                </li>
              ))
            ) : (
              <p>No users to display.</p> // Mensaje si no hay usuarios
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
