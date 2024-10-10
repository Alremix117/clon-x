import { Routes, Route } from "react-router-dom";
import { EventsPage } from "../pages/EventsPage";
import { Profile } from "../pages/Profile";
import { Followers } from "../pages/Followers";
import { Following } from "../pages/Following";
import { Post } from "../pages/Post";
import { UsersProfile } from "../pages/UsersProfile";

export const EventsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
        <Route path="/post" element={<Post />} />
        <Route path="/usersprofile" element={<UsersProfile />} />
      </Routes>
    </>
  );
};
