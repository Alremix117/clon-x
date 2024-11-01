import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const initForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    authState: { errorMessage },
    logInUser,
    logInWithGoogle,
  } = useContext(AuthContext);

  const { email, password, onInputChange } = useForm(initForm);

  const onLogin = async (event) => {
    event.preventDefault();

    const isValidLogin = await logInUser(email, password);

    if (isValidLogin) {
      navigate("/events", { replace: true });
    }
  };

  const onLoginWithGoogle = async (event) => {
    event.preventDefault();

    const isValidLogin = await logInWithGoogle();

    if (isValidLogin) {
      navigate("/events", { replace: true });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#192734",
          borderRadius: "10px",
          padding: "30px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
          Iniciar Sesión
        </h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ color: "#8899A6" }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Ingrese su correo electrónico"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #38444D",
                backgroundColor: "#253341",
                color: "white",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ color: "#8899A6" }}>
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Ingrese su contraseña"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #38444D",
                backgroundColor: "#253341",
                color: "white",
              }}
            />
          </div>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
              {errorMessage}
            </div>
          )}
          <button
            type="button"
            onClick={onLogin}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#1DA1F2",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={onLoginWithGoogle}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#DB4437",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Iniciar con Google
          </button>
          <div style={{ textAlign: "center", marginTop: "15px" }}>
            <Link to={"/register"} style={{ color: "#1DA1F2", textDecoration: "none" }}>
              ¿Aún no tienes cuenta? Regístrate aquí.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
