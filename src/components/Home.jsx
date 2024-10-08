import React from "react";
import LogoA from "../img/LogoA.png";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
          display: "flex",
        }}
      >
        <div
          className="container "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={LogoA} alt="LogoA" />

          <div className="container-fluid " style={{ marginLeft: "200px" }}>
            <h1 className="text-light">What is Happening</h1>
            <br />

            <h2 className="text-light">Registrate</h2>
            <br />

            <div style={{ gap: "10px", flexDirection: "column" }}>
              <button
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  backgroundColor: "while",
                  color: "black",
                  borderColor: "while",
                  width: "500px",
                }}
              >
                {" "}
                Registrate con Google{" "}
              </button>
              <br />
              <br />
              <p className="text-light" style={{ marginLeft: "245px" }}>
                O
              </p>
              <button
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  borderColor: "while",
                  width: "500px",
                }}
              >
                {" "}
                <Link to="CreateAccount">Crear cuenta</Link>{" "}
              </button>
            </div>
            <br />

            <p className="text-light" style={{ gap: "10px" }}>
              Al registrarte, aceptas los{" "}
              <a href="https://x.com/es/tos">Términos de servicio</a> y la{" "}
              <a href="https://x.com/es/privacy">Política de privacidad,</a>{" "}
              incluida la política de{" "}
              <a href="https://help.x.com/es/rules-and-policies/x-cookies" />
              Uso de Cookies.
            </p>

            <div style={{ gap: "10px" }}>
              <h5 className="text-light">Ya tienes una cuenta?</h5>
              <br />
              <button
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "while",
                  width: "500px",
                }}
              >
                <Link to="LoginPage">Iniciar sesion</Link>
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
