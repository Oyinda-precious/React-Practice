import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>
        <h1>This is the profile</h1>
        <ul>
          <li>
            <Link to="/profile/temi">Temi</Link>
          </li>
          <li>
            <Link to="/profile/tola">Tola</Link>
          </li>
          <li>
            <Link to="/profile/1">One</Link>
          </li>
          <li>
            <Link to="/profile/2">Two</Link>
          </li>
          <li>
            <Link to="/profile/3">Three</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
