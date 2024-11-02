import React from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";

export const UsersProfile = () => {
  
  const user = {
    name: "Nombre del Usuario",
    username: "@nombredeusuario",
    bio: "Esta es la biografía del usuario.",
    followers: 150,
    following: 75,
    tweets: 120,
  };

  const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    content: `Este es un ejemplo de tweets del usuario ${index + 1}.`,
    date: `Fecha de publicación ${index + 1}`,
  }));

  

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
          <h1 style={{ marginBottom: "10px" }}>Perfil de {user.name}</h1>
          <h2 style={{ marginBottom: "10px", color: "#8899A6" }}>{user.username}</h2>
          <p style={{ marginBottom: "20px", color: "#8899A6" }}>{user.bio}</p>
          <div>
            <p style={{ marginBottom: "10px" }}>
              <strong>Seguidores:</strong> {user.followers} |{" "}
              <strong>Siguiendo:</strong> {user.following} |{" "}
              <strong>Tweets:</strong> {user.tweets}
            </p>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#1DA1F2", 
                color: "white",
                borderRadius: "50px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Seguir
            </button>
          </div>

          <h3 style={{ marginTop: "20px" }}>Publicaciones:</h3>
          <div>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: "#192734", 
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <p style={{ color: "white" }}>{post.content}</p>
                <p style={{ color: "#8899A6" }}>{post.date}</p>
              </div>
            ))}
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
