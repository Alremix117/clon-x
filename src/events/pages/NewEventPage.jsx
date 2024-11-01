import { useContext } from "react";
import { EventContext } from "../contexts/EventContext";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const newEmptyEvent = {
  name: "",
  date: "",
  imageUrl: "",
};

export const NewEventPage = () => {
  const navigate = useNavigate();

  const { eventState: { errorMessage }, saveEvent } = useContext(EventContext);

  const { name, date, imageUrl, onInputChange } = useForm(newEmptyEvent);

  const onCreateEvent = async (e) => {
    e.preventDefault();

    const event = {
      name,
      date,
      imageUrl,
    };

    await saveEvent(event);

    if (!errorMessage) {
      Swal.fire({
        title: "Created",
        text: "New event created",
        icon: "success",
      });

      navigate("/events", { replace: true });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
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
          maxWidth: "600px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
          Crear nuevo post
        </h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ color: "#8899A6" }}>
              Nombre del post
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onInputChange}
              placeholder="Ingrese el nombre del evento"
              required
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
            <label htmlFor="date" style={{ color: "#8899A6" }}>
              Fecha
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={date}
              onChange={onInputChange}
              placeholder="Ingrese la fecha del evento"
              required
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
            <label htmlFor="imageUrl" style={{ color: "#8899A6" }}>
              URL de la Imagen del Evento
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={onInputChange}
              placeholder="Ingrese la URL de la imagen"
              required
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
          <button
            type="submit"
            onClick={onCreateEvent}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#1DA1F2",
              color: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Crear nuevo evento
          </button>
        </form>
      </div>
    </div>
  );
};
