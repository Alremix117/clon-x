import { Routes, Route } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";

export const EventsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
};
