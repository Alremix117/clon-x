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
  const { authState: { errorMessage }, logInUser, logInWithGoogle } = useContext(AuthContext);
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
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ backgroundColor: "#192734", borderRadius: "10px", padding: "30px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Iniciar sesión</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ color: "#8899A6" }}>Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Ingrese su correo electrónico"
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #38444D", backgroundColor: "#253341", color: "white" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ color: "#8899A6" }}>Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Ingrese su contraseña"
              required
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #38444D", backgroundColor: "#253341", color: "white" }}
            />
          </div>
          {errorMessage && (
            <div style={{ backgroundColor: "#e74c3c", color: "white", padding: "10px", borderRadius: "5px", marginBottom: "15px", textAlign: "center" }}>
              {errorMessage}
            </div>
          )}
          <button type="submit" onClick={onLogin} style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#1DA1F2", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>Iniciar sesión</button>
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Link to={"/createaccount"} style={{ color: "#1DA1F2", textDecoration: "none" }}>¿No tienes cuenta? Crea una aquí.</Link>
          </div>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={onLoginWithGoogle} style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#DB4437", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>Iniciar sesión con Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};
