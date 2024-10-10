import React from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";

export const Following = () => {

  

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
            backgroundColor: "black", 
            borderRadius: "10px",
            color: "white",
            overflowY: "auto", 
            height: "100vh", 
          }}
        >
          <h1 style={{ color: "white", marginBottom: "20px" }}>Seguidos</h1>
          {/* seguidores simulada */}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {Array.from({ length: 10 }, (_, index) => (
              <li key={index} style={{ color: "#8899A6", marginBottom: "10px" }}>
                Usuario{index + 1}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            width: "20%",
            padding: "20px",
            color: "white",
            backgroundColor: "black", 
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
