import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const initForm = {
  email: "",
  displayName: "",
  password: "",
};

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { authState: { errorMessage }, signUpUser } = useContext(AuthContext);
  const { email, password, displayName, onInputChange } = useForm(initForm);

  const onRegister = async (event) => {
    event.preventDefault();
    const isValidLogin = await signUpUser(email, password, displayName);
    if (isValidLogin) {
      navigate("/events", { replace: true });
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div style={{ backgroundColor: "#192734", borderRadius: "10px", padding: "30px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>Registrar usuario nuevo</h2>
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
            <label htmlFor="displayName" style={{ color: "#8899A6" }}>Nombre Completo</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              placeholder="Llena con un nombre completo"
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
          <button type="submit" onClick={onRegister} style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#1DA1F2", color: "white", border: "none", fontWeight: "bold", cursor: "pointer" }}>Registrar</button>
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Link to={"/login"} style={{ color: "#1DA1F2", textDecoration: "none" }}>¿Ya tienes cuenta? Inicia sesión aquí.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
