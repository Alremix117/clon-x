import React, { useContext } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/contexts/AuthContext"; 

export const Profile = () => {
  const { authState } = useContext(AuthContext); 
  const { user, logged } = authState;



  
  if (!logged) {
    return <h1>No estás autenticado. Por favor, inicia sesión.</h1>;
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
              <li style={{ marginBottom: "20px" }}>
                <Link
                  to="/post"
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

        <div
          style={{
            width: "60%",
            padding: "20px",
            borderLeft: "1px solid #38444D",
            borderRight: "1px solid #38444D",
          }}
        >
          <h2 style={{ color: "white", marginBottom: "20px" }}>{user.fullName}</h2>
          <h4 style={{ color: "#8899A6", marginBottom: "10px" }}>{user.username}</h4>
          <p style={{ color: "#8899A6", marginBottom: "20px" }}>{user.bio}</p>

          {/* Agregar contadores de seguidores y seguidos */}
          <div style={{ marginBottom: "20px" }}>
            <Link to="/followers" style={{ color: "white", marginRight: "20px" }}>
              Seguidores: {user.followersCount}
            </Link>
            <Link to="/following" style={{ color: "white" }}>
              Seguidos: {user.followingCount}
            </Link>
          </div>

          <h3 style={{ color: "white", marginBottom: "10px" }}>Tweets</h3>

          {user.tweets && user.tweets.length > 0 ? (
            user.tweets.map((tweet, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#192734",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <p style={{ color: "#8899A6" }}>{tweet}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "#8899A6" }}>No hay tweets disponibles.</p>
          )}
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
