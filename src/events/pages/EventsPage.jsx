import React, { useContext } from "react";
import { AuthContext } from "../../auth/contexts/AuthContext";
import LogoA from "../../img/LogoA.png";
import { Link, useNavigate } from "react-router-dom";

export const EventsPage = () => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext); // Obtén la función de cierre de sesión del contexto

  const handleUserClick = () => {
    navigate('/UsersProfile'); 
  };

  const handleLogout = () => {
    logOutUser(); // Llama a la función de cierre de sesión
    navigate('/'); // Redirige a la página de inicio después de desloguearse
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

          <div
            style={{
              backgroundColor: "#192734",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <textarea
              placeholder="What's happening?"
              style={{
                width: "100%",
                height: "80px",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
                outline: "none",
                resize: "none",
              }}
            ></textarea>
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#1DA1F2",
                color: "white",
                borderRadius: "50px",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Tweet
            </button>
          </div>

          <div>
            <div
              style={{
                backgroundColor: "#192734",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
              onClick={handleUserClick}
            >
              <h3 style={{ color: "white" }}>User1</h3>
              <p style={{ color: "#8899A6" }}>This is a sample tweet!</p>
            </div>
            <div
              style={{
                backgroundColor: "#192734",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3 style={{ color: "white" }}>User2</h3>
              <p style={{ color: "#8899A6" }}>Another tweet for testing!</p>
            </div>
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
