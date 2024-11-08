import React, { useContext, useEffect } from "react";
import LogoA from "../../img/LogoA.png";
import { Link } from "react-router-dom";
import { EventContext } from "../contexts/EventContext";

export const UsersProfile = () => {
  const { eventState, loadUsers, followUser } = useContext(EventContext);

  const { users = [], errorMessage } = eventState; // Default value for users as an empty array

  useEffect(() => {
    // Llama a loadUsers solo si users no tiene datos
    if (!users || users.length === 0) {
      loadUsers();
    }
  }, [users, loadUsers]);

  if (!users) {
    return <p>Loading users...</p>;
  }

  if (errorMessage) {
    return <p style={{ color: "red" }}>{errorMessage}</p>;
  }

  const handleFollow = (userId) => {
    followUser(userId); // Asegúrate de que esta función sea la correcta
  };

  const handleUnfollow = (userId) => {
    console.log(`Unfollow user with ID: ${userId}`);
    // Add unfollow functionality here (e.g., make an API call to unfollow the user)
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
                <h2 style={{ color: "#1DA1F2" }}>
                  {user.displayName || "Unknown User"}
                </h2>
                <p>{user.email || "No email provided"}</p>
                {user.bio && <p>{user.bio}</p>}
                <p>
                  <strong>Followers:</strong> {user.followers || 0} |{" "}
                  <strong>Following:</strong> {user.following || 0}
                </p>

                {/* Follow/Unfollow Buttons */}
                <div style={{ marginTop: "10px" }}>
                  {user.isFollowing ? (
                    <button
                      onClick={() => handleUnfollow(user.id)}
                      style={{
                        backgroundColor: "#ff0000",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => handleFollow(user.id)}
                      style={{
                        backgroundColor: "#1DA1F2",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </li>
            ))
          ) : (
            <p>No users to display.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
