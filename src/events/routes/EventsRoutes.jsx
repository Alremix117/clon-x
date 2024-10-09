import { Routes, Route } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { Profile } from "../pages/Profile";

export const EventsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
