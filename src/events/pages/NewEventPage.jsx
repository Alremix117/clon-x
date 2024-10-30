import { useContext } from "react";
import { EventContext } from "../contexts/EventContext";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const newEmptyEvent = {
  name: "",
  date: "",
  imageUrl: "",
};

export const NewEventPage = () => {
  const navigate = useNavigate();

  const { eventState: {errorMessage}, saveEvent } = useContext(EventContext);

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    placeholder="Enter event name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date"> Initial Date </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    name="date"
                    value={date}
                    onChange={onInputChange}
                    placeholder="Enter event date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imageUrl">Event Image url</label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={onInputChange}
                    placeholder="Enter event image url"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onCreateEvent}
                >
                  Crear nuevo evento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
