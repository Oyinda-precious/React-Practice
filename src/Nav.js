import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="namee">
      <div className="aboutme">Home</div>
      <div className="aboutme">About</div>
      <ul>
        <li>
          <Link to="/">Sign up</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
